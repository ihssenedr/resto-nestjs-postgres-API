FROM node:12-alpine

WORKDIR /app
EXPOSE 3000

COPY package* ./
RUN npm i
COPY . .

ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]