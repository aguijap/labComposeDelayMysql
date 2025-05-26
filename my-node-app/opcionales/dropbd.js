const mysql = require('mysql2/promise');

// Configura tu conexión a la base de datos aquí
const dbConfig = {
    host: 'localhost',
    user: 'admin',
    password: 'example',
    database: 'mydatabase'
};

async function dropEmpleadosTable() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        await connection.execute('DELETE FROM empleados');
        console.log('Todos los registros de la tabla "empleados" han sido eliminados exitosamente.');
    } catch (error) {
        console.error('Error al eliminar los registros de la tabla "empleados":', error.message);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

dropEmpleadosTable();