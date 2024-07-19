# Usa una imagen base de Node.js
FROM node:14

# Crea un directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3010

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]