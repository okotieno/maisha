# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

# Define build arguments
ARG NX_BASE_HREF

# Set environment variables
ENV NX_BASE_HREF=$NX_BASE_HREF

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

RUN pnpm nx build furaha -- --baseHref=$NX_BASE_HREF

# Stage 2: Serve with Caddy
FROM caddy:latest

WORKDIR /srv

# Copy built application
COPY --from=builder /app/dist/apps/furaha /srv

COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
