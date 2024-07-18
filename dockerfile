# Use the specified Node.js version
FROM node:20

# Set the working directory inside the container
WORKDIR /frontend

# Copy the package.json and yarn.lock files first to leverage Docker cache
COPY package.json /frontend/

# RUN rm -rf node_modules yarn.lock

# Install dependencies, including devDependencies
RUN yarn install

# Copy the entire project to the working directory
COPY . .

# Run the build command
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["yarn", "dev"]

