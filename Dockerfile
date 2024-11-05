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