# Use a Node.js image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy everything to the container
COPY . .

# Expose port
EXPOSE 3000

CMD ["yarn", "start" ]