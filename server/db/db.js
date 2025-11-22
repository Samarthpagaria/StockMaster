import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  // use environment variable only for the password as requested
  password: process.env.DB_PASSWORD || "",
  database: "StockMaster",
  port: 5432,
});

export default db;
