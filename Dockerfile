# Step 1
FROM node:18-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Step 2
FROM nginx:alpine
COPY --from=build-step /app/dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
