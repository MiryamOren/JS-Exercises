function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = '';
    for (let j = 1; j <= i; j++) {
      step += '#';
    }
    for (let h = 1; h <= n - i; h++) {
      step += ' ';
    }
    console.log(`'${step}'`);
  }
}
