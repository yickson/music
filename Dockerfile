# Dockerfile for enviroment Dev
FROM node:16

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3005

CMD ["npm", "run", "dev"]
