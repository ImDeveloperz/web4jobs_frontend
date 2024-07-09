FROM node:20-alpine

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you're using Yarn) to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of your application's source files to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port that your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]