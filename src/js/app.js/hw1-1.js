const bonus = (arr) => Math.floor((arr.reduce((a, b) => a + b) - 10000)*0.05);
bonus([200, 550, 4000, 23, 58, 5000, 485, 711]);
