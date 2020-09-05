const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'Bhavesh4362',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
