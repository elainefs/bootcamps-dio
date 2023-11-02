function winningBalance(winning = 111, losses = 50) {
  let balance = winning - losses;
  return balance;
}

if (winningBalance() < 10) {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Ferro`
  );
} else if (winningBalance() <= 20) {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Bronze`
  );
} else if (winningBalance() <= 50) {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Prata`
  );
} else if (winningBalance() <= 80) {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Ouro`
  );
} else if (winningBalance() <= 90) {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Diamante`
  );
} else if (winningBalance() <= 100) {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Lendário`
  );
} else {
  console.log(
    `O Herói tem saldo de ${winningBalance()} vitórias e está no nível Imortal`
  );
}