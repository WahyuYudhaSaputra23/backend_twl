// Database.js: File ini berisi konfigurasi koneksi database menggunakan Sequelize. 
// Melakukan koneksi ke database MySQL dengan mengatur nama database, 
// username, password, host, dan jenis dialect.

import { Sequelize } from "sequelize";
const db = new Sequelize('bjogpue4v8y3tcegaxwl','uvjcjcm0aedzaouo','ha1JOBZjmtNpY4rWqyGw',{
    host: 'bjogpue4v8y3tcegaxwl-mysql.services.clever-cloud.com',
    dialect: "mysql",
    port: 3306
});

export default db;