require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Crear la tabla 'empleados' si no existe
db.query(
    `CREATE TABLE IF NOT EXISTS empleados (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        apellidos VARCHAR(255) NOT NULL,
        edad INT NOT NULL
    )`,
    (err) => {
        if (err) {
            console.error('Error al crear la tabla empleados:', err);
        } else {
            console.log('Tabla empleados lista');
        }
    }
);

// Rutas directamente en este archivo
app.post('/api/empleados', (req, res) => {
    const { nombre, apellidos } = req.body;
    if (!nombre || !apellidos) {
        return res.status(400).json({ message: 'Nombre y apellidos requeridos' });
    }
    // Generar edad aleatoria entre 1 y 100
    const edad = Math.floor(Math.random() * 100) + 1;
    db.query(
        'INSERT INTO empleados (nombre, apellidos, edad) VALUES (?, ?, ?)',
        [nombre, apellidos, edad],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error al crear usuario' });
            }
            res.json({ message: 'Usuario creado correctamente', edad });
        }
    );
});

app.get('/api/empleados', (req, res) => {
    db.query('SELECT nombre, apellidos, edad FROM empleados', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener usuarios' });
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});