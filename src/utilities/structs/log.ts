import os from "os";

class logger {
    public bot(message: string) {
        console.log(`\x1b[37m[\x1b[35mBOT\x1b[0m\x1b[37m] ${message}`)
    }

    public xmpp(message: string) {
        console.log(`\x1b[37m[\x1b[35mXMPP\x1b[0m\x1b[37m] ${message}`)
    }
    public error(message: string) {
        console.log(`\x1b[37m[\x1b[31mERROR\x1b[0m\x1b[37m] ${message}`);
    }

    public warn(message: string) {
        console.log(`\x1b[37m[\x1b[33mWARN\x1b[0m\x1b[37m] ${message}`);
    }

    public api = (message: string) => {
        console.log(`\x1b[37m[\x1b[36mAPI\x1b[0m\x1b[37m] ${message}`);
    }

}

export default new logger();