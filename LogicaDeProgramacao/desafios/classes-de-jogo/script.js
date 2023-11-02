class Hero {
  constructor(name, age, type) {
    (this.name = name), (this.age = age), (this.type = type);
  }

  attack() {
    if (this.type == "mago") {
      return "magia";
    } else if (this.type == "guerreiro") {
      return "espada";
    } else if (this.type == "monge") {
      return "artes marciais";
    } else if (this.type == "ninja") {
      return "shuriken";
    }
  }

  toAttack() {
    console.log(`O ${this.type} ${this.name} atacou usando ${this.attack()}.`);
    return "";
  }
}

let hero = new Hero("Shikamaru", 20, "ninja");
console.log(hero.toAttack());