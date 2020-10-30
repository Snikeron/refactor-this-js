import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

app.listen(process.env.PORT || 3333);
console.log(`🔥🔥 Server is up! 👂 on port ${process.env.PORT || 3333}`)
