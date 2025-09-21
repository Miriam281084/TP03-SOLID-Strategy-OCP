// Programa B - Principio OCP (Open/Closed Principle)
// Sistema de notificaciones extensible

class Notifier {
  send(message) {
    throw new Error("Método no implementado");
  }
}

class EmailNotifier extends Notifier {
  send(message) {
    console.log("📧 Enviando email:", message);
  }
}

class SMSNotifier extends Notifier {
  send(message) {
    console.log("📱 Enviando SMS:", message);
  }
}

class PushNotifier extends Notifier {
  send(message) {
    console.log("🔔 Enviando notificación push:", message);
  }
}

class NotificationService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  notify(message) {
    this.notifier.send(message);
  }
}

// Ejecución
const emailService = new NotificationService(new EmailNotifier());
emailService.notify("Tu pedido fue confirmado.");

const smsService = new NotificationService(new SMSNotifier());
smsService.notify("Tu paquete está en camino.");

const pushService = new NotificationService(new PushNotifier());
pushService.notify("Tienes un nuevo mensaje.");
