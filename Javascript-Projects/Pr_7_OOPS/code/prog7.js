class Logger {
    log(message) {
        console.log("Default:", message);
    }
}

class ConsoleLogger extends Logger {
    log(message) {
        console.log("📢 Console:", message);
    }
}

class FileLogger extends Logger {
    log(message) {
        console.log("📝 Writing to file:", message);
    }
}

class DatabaseLogger extends Logger {
    log(message) {
        console.log("💾 Saving to database:", message);
    }
}

function logMessage(logger, message) {
    logger.log(message);
}

logMessage(new ConsoleLogger(), "User logged in");
logMessage(new FileLogger(), "User order saved");
logMessage(new DatabaseLogger(), "Error: DB connection failed");