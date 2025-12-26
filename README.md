# Sistema de Gestión de Inventario

El presente proyecto consiste en el diseño y desarrollo de una aplicación web fullstack para la gestión de inventario de una empresa, elaborada como parte de la asignatura Desarrollo de Sistemas Informáticos, Unidad 4, de la Universidad Técnica de Manabí. El sistema fue desarrollado aplicando principios de programación web moderna, arquitectura cliente-servidor, estructura modular y persistencia de datos mediante bases de datos.

El objetivo principal del sistema es permitir la administración eficiente de productos o insumos, facilitando el registro, actualización, consulta y eliminación de información, así como el control de stock, mediante una interfaz web intuitiva y responsiva.

## Objetivos del proyecto

Diseñar y desarrollar una aplicación web completa que permita gestionar un inventario de productos aplicando operaciones CRUD, autenticación de usuarios y control de stock, integrando un frontend moderno con un backend robusto y una base de datos persistente.

## Funcionalidades del sistema

El sistema de inventario desarrollado cuenta con las siguientes funcionalidades principales:

- Registro e inicio de sesión de usuarios.
- Gestión completa de productos (crear, listar, actualizar y eliminar).
- Control del stock de productos.
- Comunicación entre frontend y backend mediante una API REST.
- Persistencia de datos en una base de datos MongoDB Atlas.
- Interfaz gráfica moderna, centrada y responsiva.

## Tecnologías utilizadas

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv
- nodemon

### Frontend
- React (Vite)
- Axios
- HTML5
- CSS3

## Estructura del proyecto

El proyecto se encuentra organizado de manera modular, separando claramente el backend y el frontend, lo cual facilita el mantenimiento y la escalabilidad del sistema.

carpeta-app/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── app.js
│ ├── .env
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── App.css
│ │ └── index.css
│ └── package.json
├── .gitignore
└── README.md

markdown
Copiar código

## Instalación y ejecución del proyecto

### Requisitos previos
- Node.js instalado.
- Cuenta activa en MongoDB Atlas.
- Git instalado.

### Ejecución del backend

1. Acceder a la carpeta backend.
2. Instalar las dependencias del proyecto.
3. Crear el archivo de configuración de entorno `.env` con las variables necesarias.
4. Ejecutar el servidor en modo desarrollo.

El backend se ejecuta en el puerto 4000 y establece conexión con la base de datos MongoDB Atlas.

### Ejecución del frontend

1. Acceder a la carpeta frontend.
2. Instalar las dependencias.
3. Ejecutar la aplicación web en modo desarrollo.

El frontend se ejecuta en el navegador a través del servidor de desarrollo de Vite.

## Comunicación Frontend – Backend

La comunicación entre el frontend y el backend se realiza mediante Axios, consumiendo los endpoints expuestos por la API REST desarrollada con Express.js, permitiendo la gestión completa de los productos desde la interfaz web.

## Pruebas realizadas

- Pruebas de los endpoints CRUD mediante Postman.
- Verificación de la conexión con la base de datos MongoDB Atlas.
- Pruebas funcionales del sistema desde el frontend.
- Comprobación del diseño responsivo en diferentes tamaños de pantalla.

## Documentación y control de versiones

El código fuente del sistema fue versionado y publicado en un repositorio GitHub, incluyendo la documentación técnica mediante este archivo README.md, el cual describe las tecnologías empleadas, la estructura del proyecto y las instrucciones básicas de ejecución.

## Autores

Estudiante(s):  
Carrera: Desarrollo de Sistemas Informáticos  
Universidad: Universidad Técnica de Manabí  
Docente: Ing. Enrique Macías, Mg.

## Notas finales

El proyecto fue desarrollado con fines académicos, aplicando buenas prácticas de desarrollo web, separación de responsabilidades entre frontend y backend, y el uso de bases de datos para garantizar la persistencia de la información.

Fuente: Elaboración propia.
