# Use Node.js for building the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

#Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the application
ARG NX_BASE_HREF
ENV NX_BASE_HREF=${NX_BASE_HREF}
RUN pnpm build

# Use Caddy as the production server
FROM caddy:2.7.4

# Set working directory
WORKDIR /srv

# Copy built application from builder
COPY --from=builder /app/dist/apps/furaha ./dist

# Copy the Caddyfile
COPY /app/apps/furaha/caddy/Caddyfile /etc/caddy/Caddyfile

# Expose ports for HTTP and HTTPS
EXPOSE 80 443

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
