/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-viewport"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    docs: {
        autodocs: "tag"
    },
    previewHead: (head) => {
        return `${head}
    <script>
        // Token is set from user (?)
        window.BASEURL = "${process.env.BASEURL}"
        window.PONNISTE_UI = "${process.env.PONNISTE_UI}"
        console.info({
            baseUrl: window.BASEURL,
            ponnisteUi: window.PONNISTE_UI
        })
    </script>
`
    }
}
export default config
