# Latest Nginx image
FROM nginx:latest

# Install OpenSSL and generate the SSL keys
RUN apt-get update && \
	apt-get install -y openssl && \
	openssl req -newkey rsa:4096 -nodes -sha256 -keyout /etc/ssl/private/ssl_certificate_secret.key -x509 -days 365 -out /etc/ssl/private/ssl_certificate.crt -subj "/C=${COUNTRY_NAME}/ST=${STATE_OR_PROVINCE}/O=${ORGANIZATION}/OU=${ORGANIZATIONAL_UNIT}/CN=${COMMON_NAME}"
