// Programa A - Patrón Strategy
// Sistema de cálculo de descuentos en un carrito de compras

class DiscountStrategy {
  calculate(price) {
    throw new Error("Método no implementado");
  }
}

class NoDiscount extends DiscountStrategy {
  calculate(price) {
    return price;
  }
}

class PercentageDiscount extends DiscountStrategy {
  constructor(percentage) {
    super();
    this.percentage = percentage;
  }
  calculate(price) {
    return price - (price * this.percentage);
  }
}

class FixedDiscount extends DiscountStrategy {
  constructor(amount) {
    super();
    this.amount = amount;
  }
  calculate(price) {
    return price - this.amount;
  }
}

class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  checkout(price) {
    return this.discountStrategy.calculate(price);
  }
}

// Ejecución
const cart1 = new ShoppingCart(new NoDiscount());
console.log("Sin descuento:", cart1.checkout(100));

const cart2 = new ShoppingCart(new PercentageDiscount(0.2));
console.log("Descuento 20%:", cart2.checkout(100));

const cart3 = new ShoppingCart(new FixedDiscount(15));
console.log("Descuento fijo $15:", cart3.checkout(100));
