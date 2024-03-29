# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM --platform=linux/amd64 oven/bun:latest AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# install with --production (exclude devDependencies)
FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/prod/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun run build

# release stage
FROM nginxinc/nginx-unprivileged:alpine-slim AS release
COPY --from=prerelease /usr/src/app/dist /usr/share/nginx/html
RUN sed -i '/location \/ {/a\        try_files \$uri \$uri/ /index.html;' /etc/nginx/conf.d/default.conf \
    && cat /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
