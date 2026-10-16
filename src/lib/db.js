import { Pool } from "pg";

const poolData = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default poolData;
