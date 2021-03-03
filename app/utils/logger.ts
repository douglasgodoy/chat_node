import * as fs from "fs";
import Utils from './index'
export default class Logger{
    utils:Utils;

    constructor(){
        this.utils = new Utils();
    }

    save(type: string, message: string, cb: void | boolean) {
        fs.appendFile(
            "./error.log",
            `\n\t{ ${type}: ${message}, date: ${this.utils.formatDate()} }`,
            () => cb
        );
    }

    info(msg: string): void | boolean {
        return false;
    }

    warn(msg: string): void {
        this.save(
            "warning",
            msg,
            process.env.NODE_ENV !== "production"
                ? console.log(`warning: ${msg.toUpperCase()}`)
                : false
        );
    }

    error(msg: string) {
        this.save(
            "error",
            msg,
            console.log(
                process.env.NODE_ENV === "production"
                    ? `sorry, error detected....`
                    : `error: ${msg.toUpperCase()}`
            )
        );
    }
}
