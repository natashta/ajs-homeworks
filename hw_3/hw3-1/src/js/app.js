const person = {name: 'Маг', health: 30};

export default function showHealth (person) {
if ((person.health > 50) && (person.health <= 100))return 'healthy';
else if ((person.health <= 50) && (person.health > 15)) return 'wounded';
else if ((person.health <= 15) && (person.health >= 0)) return 'critical';
else return 'Ошибка. Значение может быть числом от 0 до 100';
}

showHealth(person);
