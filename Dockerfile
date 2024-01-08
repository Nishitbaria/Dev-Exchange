FROM node:20.10.0-alpine3.10

# Create app directory
WORKDIR /app 

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source     
COPY . .    

# Expose port 3000      
EXPOSE 3000 

# Run app   
CMD npm run dev


