FROM node
WORKDIR /app
COPY package*.json /app/
EXPOSE 3000
RUN npm install
COPY . . 
ENTRYPOINT ["npm", "start"]