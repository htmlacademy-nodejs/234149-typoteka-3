'use strict';

/**
 * Возвращает случайное число в диапазоне
 * `min` и `max`.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Реализует алгоритмом тасования Фишера-Йетса
 * @param {Array} someArray
 * @return {Array}
 * */
module.exports.shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

/**
 * Генерирует случайную дату в пределах 3х месяцев, включая текущий
 * @return {Date}
 * */
module.exports.getRandomDate = () => {
  const today = new Date(Date.now());
  const getBeforeDate = () => {
    const date = new Date();
    return new Date(date.setDate(date.getMonth() - 3));
  };
  const randomizer = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return randomizer(getBeforeDate(), today);
};
