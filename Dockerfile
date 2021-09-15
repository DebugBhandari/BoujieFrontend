FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY tsconfig.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install -g typescript

COPY . ./
CMD ["npm", "start"] 
 