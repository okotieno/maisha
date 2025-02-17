# Use Node.js for building the application
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .

ARG NX_BASE_HREF
ENV NX_BASE_HREF=${NX_BASE_HREF}
RUN pnpm build

# Use Caddy as the production server
FROM caddy:2.7.4

# Copy built files from correct output directory
COPY --from=builder /app/dist/apps/furaha /srv/dist

# Use simplified Caddyfile configuration
COPY --from=builder /app/apps/furaha/caddy/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
