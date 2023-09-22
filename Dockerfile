# Etapa 1: Instalación de módulos
FROM node:18.17.1 as module-install-stage
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --production

# Etapa 2: Construcción de la aplicación
FROM node:18.17.1 as build-stage
COPY --from=module-install-stage /app/node_modules/ /app/node_modules
WORKDIR /app
COPY . .
RUN npm run build

# Etapa 3: Servir la aplicación
FROM node:18.17.1
COPY --from=build-stage /app/build/ /app/build
RUN npm install -g serve
CMD serve -s /app/build -l 3000
