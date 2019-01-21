const formatEnding = (balans) => {
  if ((balans == 11) || (balans == 12) || (balans == 13) || (balans == 14)) {return 'ов';}
  else {
let num = balans.toString().slice(-1);
let ending;

if (num == '1') {return ' ';}
	else if ((num == '2') || (num == '3') || (num == '4')) {return 'a';}
	else {return 'ов'};
  }
}
const balans1 = 523;
const balans2 = 6000;
const balans3 = 5001;
const output = `Ваш баланс: ${balans1} балл${formatEnding(balans1)}\n
Ваш баланс: ${balans2} балл${formatEnding(balans2)}\n
Ваш баланс: ${balans3} балл${formatEnding(balans3)}`;
console.log(output); 
