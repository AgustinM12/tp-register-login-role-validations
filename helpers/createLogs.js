import fs from "fs"
import path from "path"

export const createLogs = (message, initalPath, nameFolder) => {
    
    initalPath = initalPath.slice(1)

    const logDirectory = path.join(initalPath, nameFolder);
    const date = new Date(Date.now());

    const logFileName = date.toJSON().slice(0, 10) + ".log";
    const logFilePath = path.join(logDirectory, logFileName);

    console.log("logDirectory:", logDirectory);
    console.log("logFileName:", logFileName);
    console.log("logFilePath:", logFilePath);

    try {

        if (!fs.existsSync(logDirectory)) {
            fs.mkdirSync(logDirectory);
        }

        if (!fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, "");
        }

        fs.appendFileSync(logFilePath, message)
    } catch (error) {
        console.log("Error at create logs directory: ", error)
    }
};