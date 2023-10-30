# Use the official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the rest of the application's files to the container
COPY . .

# Specify the command to run when the container starts
CMD ["node", "server.js"]

# Expose port 3000 to outside the container
EXPOSE 3000

