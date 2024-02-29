const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function findProject(project) {
    if (project.id) {
        const projectData = await prisma.project.findUnique({
            where: { id: project.id },
            include: {
                interfaces: true, // Include interfaces related to the project
            },
        })

        // Transform the project data to include a 'dark_theme' property
        if (projectData) {
            projectData.dark_theme = projectData.darkTheme
            delete projectData.darkTheme // Remove the original 'darkTheme' property
        }

        return projectData
    } else {
        return null
    }
}

async function findOwnProjects(userID) {
    const projects = await prisma.project.findMany({
        where: { ownerId: userID },
        select: {
            id: true,
            name: true,
            startId: true,
        },
    })

    return projects
}

async function addProject(project) {
    const { uiSettings, ownerId, name, startId } = project
    const darkTheme = uiSettings.darkTheme ? true : false

    const createdProject = await prisma.project.create({
        data: {
            ownerId,
            name,
            startId,
            darkTheme,
        },
    })

    // Insert the interface
    await prisma.interface.create({
        data: {
            projectId: createdProject.id,
            darkTheme,
            font: uiSettings.font,
            fontSize: uiSettings.fontSize,
            primaryColor: uiSettings.primaryColor,
            secondaryColor: uiSettings.secondaryColor,
        },
    })

    return createdProject
}

async function updateProject(projectID, project) {
    const updatedProject = await prisma.project.update({
        where: { id: projectID },
        data: {
            name: project.name,
            startSlideId: project.start_slide_id,
        },
    })

    return updatedProject
}

async function findProjectSlides(projectID) {
    const slides = await prisma.slide.findMany({
        where: { projectId: projectID },
        include: {
            images: true, // Include images related to each slide
        },
        select: {
            id: true,
            projectId: true,
            reverting: true,
            images: {
                select: {
                    id: true,
                },
            },
        },
    })

    slides.forEach((slide) => {
        slide.slide_id = slide.id
        slide.image_id = slide.images[0]?.id // Assuming each slide has at least one image
        slide.reverting = slide.reverting ? 1 : 0
        delete slide.id // Remove the original 'id' property
    })

    return slides
}

async function deleteProject(projectID) {
    // Find the project and its related slides and interfaces
    const project = await prisma.project.findUnique({
        where: { id: projectID },
        include: {
            interfaces: true, // Include interfaces related to the project
            slides: true, // Include slides related to the project
        },
    })

    if (!project) {
        throw new Error("Project not found")
    }

    // Delete all related slides
    for (const slide of project.slides) {
        await prisma.slide.delete({ where: { id: slide.id } })
    }

    // Delete all related interfaces
    for (const interfaceItem of project.interfaces) {
        await prisma.interface.delete({ where: { id: interfaceItem.id } })
    }

    // Finally, delete the project itself
    const results = await prisma.project.delete({ where: { id: projectID } })

    return results
}

async function findSlide(slide) {
    if (slide.id) {
        const slideData = await prisma.slide.findUnique({
            where: { id: slide.id },
        })

        return slideData
    } else {
        return null
    }
}

async function addSlide(projectID, slide) {
    // Insert the slide
    const createdSlide = await prisma.slide.create({
        data: {
            projectId: projectID,
            heading: slide.heading,
            reverting: slide.reverting,
            description: slide.description,
        },
    })

    // Insert the image related to the slide
    await prisma.image.create({
        data: {
            slideId: createdSlide.id,
            loc: slide.image.loc,
            horizPos: slide.image.horiz_pos,
            vertPos: slide.image.vert_pos,
            size: slide.image.size,
            angle: slide.image.angle,
        },
    })

    return createdSlide
}

async function updateSlide(slide) {
    // Update the slide
    const updatedSlide = await prisma.slide.update({
        where: { id: slide.id },
        data: {
            heading: slide.heading,
            reverting: slide.reverting,
            description: slide.description,
        },
    })

    // Update the related image
    const updatedImage = await prisma.image.update({
        where: { slideId: slide.id },
        data: {
            loc: slide.image.loc,
            horizPos: slide.image.horiz_pos,
            vertPos: slide.image.vert_pos,
            size: slide.image.size,
            angle: slide.image.angle,
        },
    })

    return updatedSlide
}

async function deleteSlide(slideID) {
    // Delete all related images
    await prisma.image.deleteMany({
        where: { slideId: slideID },
    })

    // Delete all related choices
    await prisma.choice.deleteMany({
        where: { slideId: slideID },
    })

    // Finally, delete the slide itself
    const results = await prisma.slide.delete({
        where: { id: slideID },
    })

    return results
}

async function findChoice(choice) {
    if (choice.id) {
        const choiceData = await prisma.choice.findUnique({
            where: { id: choice.id },
        })

        return choiceData
    } else {
        return null
    }
}

async function findSlideChoices(slideID) {
    const choices = await prisma.choice.findMany({
        where: { slideId: slideID },
    })

    return choices
}

async function addChoice(slideID, choice) {
    const newChoice = await prisma.choice.create({
        data: {
            title: choice.title,
            endpointId: choice.endpoint_id,
            slideId: slideID,
        },
    })

    return newChoice
}

async function updateChoice(choice) {
    const updatedChoice = await prisma.choice.update({
        where: { id: choice.id },
        data: {
            title: choice.title,
            endpointId: choice.endpoint_id,
        },
    })

    return updatedChoice
}

async function deleteChoices(slideID) {
    const results = await prisma.choice.deleteMany({
        where: { slideId: slideID },
    })

    return results
}

module.exports = {
    findProject,
    findOwnProjects,
    addProject,
    updateProject,
    findProjectSlides,
    deleteProject,
    findSlide,
    addSlide,
    updateSlide,
    deleteSlide,
    findChoice,
    findSlideChoices,
    addChoice,
    updateChoice,
    deleteChoices,
}
