import Logger from "./logger";

export default class Utils extends Logger {
    res(req: any) {
        const { path } = req;
        const method = req.stack[0].method

        this.info(`${method.toUpperCase()}: ${path}`);
    }
}