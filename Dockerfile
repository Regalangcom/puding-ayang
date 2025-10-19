# Stage 1: Build the React app
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html  
COPY puding.conf /etc/nginx/conf.d/puding.conf
RUN rm /etc/nginx/conf.d/default.conf  # Hapus default config
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]