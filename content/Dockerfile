# Use an official Node.js runtime as the base image
FROM node:20 as builder

# Set the working directory inside the container
WORKDIR /ui

# Copy .npmrc file from your local machine to the container (if needed)
# COPY .npmrc ./.npmrc

# Copy package.json to the container
COPY package.json ./

# Copy files to the container
COPY . ./

# Install dependencies
RUN npm install --verbose

# Run Webpack to build the UI project
RUN npm run dev --verbose

