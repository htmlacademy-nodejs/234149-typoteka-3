'use strict';

const fs = require(`fs`);
const {
  SENTENCES,
  CATEGORIES,
  ExitCode,
  TITLES,
  FILE_NAME,
  PublicationCount
} = require(`../constants`);
const {
  getRandomInt,
  shuffle,
  getRandomDate
} = require(`../utils`);

/**
 * Генерирует массив с моковыми данными для mock.json
 * @param {Number} count
 * @return {Array}
 * */
const generatePublications = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    category: [CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)]],
    announce: shuffle(SENTENCES).slice(1, 5).join(` `),
    fullText: shuffle(SENTENCES).slice(1, SENTENCES.length - 1).join(` `),
    createdDate: getRandomDate(),
  }))
);

module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;

    if (!isNaN(count) && Number.parseInt(count, 10) > PublicationCount.max) {
      console.error(`Не больше 1000 публикаций`);
      process.exit(ExitCode.error);
    }

    const countPublication = Number.parseInt(count, 10) || PublicationCount.min;
    const content = JSON.stringify(generatePublications(countPublication));

    fs.writeFile(FILE_NAME, content, (err) => {
      if (err) {
        console.error(`Can't write data to file...`);
        process.exit(ExitCode.error);
      }

      console.info(`Operation success. File created.`);
      process.exit();
    });
  }
};
