FROM node:18 as builder

WORKDIR /app

# Define build arguments
ARG NX_BASE_HREF

# Set environment variables
ENV NX_BASE_HREF=$NX_BASE_HREF

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

RUN pnpm nx build furaha -- --baseHref=/web/

FROM nginx:alpine

COPY --from=builder /app/dist/apps/furaha /usr/share/nginx/html

COPY --from=builder /app/apps/furaha/nginx/certs /etc/ssl/certs

COPY --from=builder /app/apps/furaha/nginx/default.conf /etc/nginx/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
