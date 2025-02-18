# Use Node.js for building the application
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install  webpack
RUN pnpm install
COPY . .

ARG NX_BASE_HREF
ENV NX_BASE_HREF=${NX_BASE_HREF}
RUN pnpm build

# Use Caddy as the production server
FROM caddy:alpine

# Copy built files from correct output directory
COPY --from=builder /app/dist/apps/furaha /usr/share/caddy

# Use simplified Caddyfile configuration
COPY --from=builder /app/apps/furaha/caddy/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
