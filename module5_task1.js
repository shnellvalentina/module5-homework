let input = prompt('Введите любое число:');
let num = +input;
if (typeof num === 'number' && !isNaN(num)) {
  if (num % 2 === 0) {
    console.log(num + ' - четное число');
  } else {
    console.log(num + ' - нечетное число');
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}