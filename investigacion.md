# Investigación -- Patrones útiles para el Trabajo Integrador Final (API SPA)

En la API para el **SPA integrador**, varios patrones de diseño serían
muy útiles. El **Strategy** permitiría manejar distintos métodos de pago
(Mercado Pago, tarjeta, transferencia) y políticas de cancelación de
turnos sin modificar la lógica central. El **Observer** sería clave para
los recordatorios automáticos de turnos y notificaciones por
WhatsApp/email, ya que permite reaccionar a eventos (ej. "turno
confirmado") y notificar a múltiples clientes. El **Factory Method**
facilitaría la creación de entidades como clientes, turnos o productos,
asegurando consistencia en los objetos. El **Singleton** serviría para
manejar la configuración global y la conexión con la base de datos.
Finalmente, el **Decorator** podría aplicarse en promociones o combos de
servicios/productos, añadiendo descuentos o beneficios sin modificar las
clases base.

Estos patrones aseguran escalabilidad, flexibilidad y facilidad de
mantenimiento en el sistema.
