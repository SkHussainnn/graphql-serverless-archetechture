# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port (if necessary)
EXPOSE 4000

# Start the application
CMD ["node", "src/graphqlHandler.js"]
