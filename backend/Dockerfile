FROM node:18-slim

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com

RUN apt-get update && \
    apt-get install -y python3 g++ make && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm cache clean --force
RUN npm install --quiet

COPY . .

RUN npm install -g nodemon

CMD ["sh", "-c", "sleep 10 && npm run dev"]

EXPOSE 5000
