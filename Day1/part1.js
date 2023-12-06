const fs = require('fs');
const filePath = 'index.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const itemsArray = data.split('\n');
  const arrayFirstLastNumber = [];

  itemsArray.map((item) => {
    const numbersArray = item.match(/\d+/g);
    const combinedNumbers = numbersArray.join('');

    let firstNumber = parseInt(combinedNumbers[0]);
    let lastNumber = parseInt(combinedNumbers[combinedNumbers.length - 1]);

    const firstLastNumber = `${firstNumber}${lastNumber}`;
    arrayFirstLastNumber.push(parseInt(firstLastNumber));
  });

  const sumOfNumbers = arrayFirstLastNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(sumOfNumbers);
});
