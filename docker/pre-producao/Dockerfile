FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["sh", "-c", "npm run db:deploy && npm run start"]
