export default function controlCard(arr) {
  // Проверяем, что массив не пустой
  if (arr.length === 0) {
    return false;
  }

  // Сначала копируем массив, чтобы не изменять исходный
  const clonedArr = [...arr];

  // Извлекаем контрольное число
  const controlNum = clonedArr.pop();

  // Инвертируем порядок цифр в массиве
  clonedArr.reverse();

  // Применяем алгоритм Луна
  let sum = 0;
  for (let i = 0; i < clonedArr.length; i++) {
    let num = clonedArr[i];

    // Если индекс четный, удваиваем цифру
    if (i % 2 === 0) {
      num *= 2;

      // Если результат удваивания больше или равен 10, вычитаем 9
      if (num >= 10) {
        num -= 9;
      }
    }

    // Суммируем все числа
    sum += num;
  }

  // Проверяем, совпадает ли остаток от деления суммы на 10 с контрольным числом
  return (sum * 9) % 10 === controlNum;
}
