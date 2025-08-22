class Notification {
    send(message) {
        console.log(`Sending notification: `, message);
    }
}

class Email extends Notification {
    send(message) {
        console.log(`📧 Email sent: `, message);
    }
}

class SMS extends Notification {
    send(message) {
        console.log(`📱 SMS sent: `, message);
    }
}

let notify = [new Email(), new SMS()];

notify.forEach(n => {
    n.send(`Your order has been shipped.!`);
})