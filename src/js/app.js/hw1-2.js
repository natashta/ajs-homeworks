const formatEnding = (strings, balans) => {
const string1 = strings[0]; 
const string2 = strings[1]; 
let ending;
  if ((balans == 11) || (balans == 12) || (balans == 13) || (balans == 14)) {ending = 'ов';}
  else {
let num = balans.toString().slice(-1);

if (num == '1') {ending = ' ';}
	else if ((num == '2') || (num == '3') || (num == '4')) {ending = 'a';}
	else {ending = 'ов'};
  }
return `${string1}${balans}${string2}${ending}`
}
const end = '';
const balans1 = 523;
const balans2 = 6000;
const balans3 = 5001;
const output1 = formatEnding`Ваш баланс: ${balans1} балл${end}`
const output2 = formatEnding`Ваш баланс: ${balans2} балл${end}`
const output3= formatEnding`Ваш баланс: ${balans3} балл${end}`;

console.log(output1,"\n", output2,"\n", output3);
