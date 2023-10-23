import "express-async-errors"
import "../src/database/cache/redisConfig"
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './http/routes';
import { AppError } from "./errors/AppError";
import { logger } from "./utils/logger";

const app = express();
const port = 3333;

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    })
})

app.listen(port, () => logger.info('Server listening on port: ' + port));