FROM node:16.10.0-alpine AS base
WORKDIR /app

FROM base AS build_modules
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN  yarn install

FROM build_modules AS build
COPY . .
RUN yarn build

FROM base AS prod_modules
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install --production

FROM base AS app
COPY . /app
COPY --from=prod_modules /app/node_modules /app/node_modules
COPY --from=build /app/.nuxt /app/.nuxt

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["yarn", "start"]
