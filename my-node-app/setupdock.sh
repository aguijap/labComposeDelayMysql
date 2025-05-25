#!/bin/bash

# Script para configurar y ejecutar la aplicación en Docker
# Asegúrate de tener Docker instalado y en funcionamiento

# Construir la imagen de Docker
docker build -t miapp .

# Ejecutar el contenedor de Docker
docker run -d \
  --name miapp_container \
  -p 8080:8080 \
  miapp

