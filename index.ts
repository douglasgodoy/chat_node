import env from "dotenv";
env.config();
import express from "express";
import Logger from './app/utils/logger'
const app = express();
const port = process.env.PORT;
const logger = new Logger();
if (process.env.NODE_ENV !== "production") {
    logger.info = (msg: string) => console.log(`info: ${msg}`);
}

app.listen(port, () => {
    logger.info(`the server is running in port ${port}`);
    logger.error("test error");
    logger.warn("warn error");
});

app.post("/test", (req, res) => res.send);
