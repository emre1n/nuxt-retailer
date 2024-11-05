# Docker Setup Documentation

This document outlines the Docker configuration for the Nuxt.js application.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

## Project Structure

The Docker configuration consists of the following files:

- `Dockerfile` - Contains instructions for building the application image
- `docker-compose.yml` - Defines the services and their configurations
- `.dockerignore` - Lists files and directories to be excluded from the Docker build

## Configuration Files

### Dockerfile

The Dockerfile uses a multi-stage build process optimized for a Nuxt.js application:

```dockerfile
FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate

WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if exists)
COPY package.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD [ "pnpm", "preview" ]
```

### Docker Compose

The docker-compose.yml file configures the development environment:

```yaml
version: '3.8'

services:
  nuxt-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.nuxt
    environment:
      - NODE_ENV=development
    command: pnpm dev
```

## Usage

### Development Environment

To start the development environment:

```bash
# Build and start the containers
docker-compose up

# Build and start in detached mode
docker-compose up -d

# Stop the containers
docker-compose down
```

The application will be available at `http://localhost:3000`

### Production Environment

To build and run the production environment:

```bash
# Build the production image
docker build -t nuxt-app .

# Run the container
docker run -p 3000:3000 nuxt-app
```

## Volume Mounts

The development environment uses the following volume mounts:

- `.:/app` - Mounts the project directory for live code updates
- `/app/node_modules` - Preserves the container's node_modules
- `/app/.nuxt` - Preserves the Nuxt build cache

## Environment Variables

Environment variables can be configured in the following ways:

1. Through docker-compose.yml:

```yaml
environment:
  - NODE_ENV=development
  # Add other environment variables here
```

2. Using a .env file:

```bash
# Create a .env file
touch .env

# Add it to docker-compose.yml
services:
  nuxt-app:
    env_file:
      - .env
```

## Troubleshooting

Common issues and solutions:

1. **Port conflicts**

   - If port 3000 is already in use, modify the port mapping in docker-compose.yml:
     ```yaml
     ports:
       - '3001:3000'
     ```

2. **Permission issues**

   - If you encounter permission issues with node_modules:
     ```bash
     # Remove node_modules and reinstall
     docker-compose down
     rm -rf node_modules
     docker-compose up --build
     ```

3. **Cache issues**
   - To rebuild without cache:
     ```bash
     docker-compose build --no-cache
     docker-compose up
     ```

## Best Practices

1. Always use `.dockerignore` to exclude unnecessary files
2. Keep the Docker image size minimal
3. Use environment variables for configuration
4. Don't store sensitive data in the Docker image
5. Regularly update base images and dependencies

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

```

This documentation provides a comprehensive guide for developers working with the Docker setup in your Nuxt.js project. You can save this as `DOCKER.md` in your project root directory.

The documentation covers:
- Prerequisites
- Configuration files explanation
- Usage instructions for both development and production
- Volume mounts
- Environment variables
- Troubleshooting common issues
- Best practices
- Additional resources

Feel free to modify this documentation based on your specific project needs or add more sections as required.
```
