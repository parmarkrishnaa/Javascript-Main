class Notification {
    send(message) {
        console.log("Default notification:", message);
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log("📧 Email:", message);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log("📱 SMS:", message);
    }
}

class PushNotification extends Notification {
    send(message) {
        console.log("🔔 Push:", message);
    }
}

function notifyAll(users, notification) {
    users.forEach(user => notification.send(`Hello ${user}`));
}

let users = ["Dhaval", "Raj", "Mira"];

notifyAll(users, new EmailNotification());
notifyAll(users, new SMSNotification());
notifyAll(users, new PushNotification());