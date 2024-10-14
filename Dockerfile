FROM node:20.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# RUN npm install -g serve

EXPOSE 5173

CMD ["npm", "run", "dev"]