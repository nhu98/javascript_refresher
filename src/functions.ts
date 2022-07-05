const PI = 3.14;
enum Months {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}
type MonthsStrings = keyof typeof Months;
export const Functions = () => {
  // Exercises: Level 1
  // Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
  const fullName = (firstName: string, lastName: string): string => {
    return `${lastName} ${firstName}`;
  };
  console.log(fullName('Nhu', 'Huynh'));

  // Declare a function addNumbers and it takes two two parameters and it returns sum.
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  console.log(addNumbers(3, 4));

  // Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
  const calculates_areaOfCircle = (r: number): number => {
    return PI * r * r;
  };
  console.log(calculates_areaOfCircle(5));

  // Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
  const convertCelciusToFahrenheit = (oC: number): string => {
    return `${(oC * 9) / 5 + 32} oF`;
  };

  console.log(convertCelciusToFahrenheit(30));

  // Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
  // The same groups apply to both men and women.
  // Underweight: BMI is less than 18.5
  // Normal weight: BMI is 18.5 to 24.9
  // Overweight: BMI is 25 to 29.9
  // Obese: BMI is 30 or more
  const calculatesBMI = (weight: number, height: number): string => {
    const bmi = weight / (height * height);
    if (bmi >= 0 && bmi < 18.5) {
      return `Underweight: BMI of you is ${bmi} less than 18.5`;
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      return `Normal weight: BMI of you is ${bmi} in 18.5 to 24.9`;
    }
    if (bmi >= 25 && bmi <= 29.9) {
      return `Overweight: BMI of you is ${bmi} in 25 to 29.9`;
    }
    if (bmi >= 30) {
      return `Obese: BMI of you ${bmi} is 30 or more`;
    }
    return 'weight or height dont correct!';
  };

  console.log(calculatesBMI(65, 1.7));

  // Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
  const autumn: MonthsStrings[] = ['September', 'October', 'November'];
  const winter: MonthsStrings[] = ['December', 'January', 'February'];
  const spring: MonthsStrings[] = ['March', 'April', 'May'];
  const summer: MonthsStrings[] = ['June', 'July', 'August'];
  const checkSeason = (monthName: MonthsStrings): string => {
    switch (true) {
      case autumn.includes(monthName):
        return `The ${monthName} of season Autumn`;
      case winter.includes(monthName):
        return `The ${monthName} of season Winter`;
      case spring.includes(monthName):
        return `The ${monthName} of season Spring`;
      case summer.includes(monthName):
        return `The ${monthName} of season Summer`;
      default:
        return 'Entered value was not a month!';
    }
  };
  console.log(checkSeason('June'));

  // Exercises: Level 2
  // Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
  const solveQuadEquation = (
    a: number,
    b: number,
    c: number
  ): { root: number } | { '0': number } | { root1: number; root2: number } => {
    if (Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c) && a === 0) {
      return { 0: 0 };
    } else {
      let discriminant = b * b - 4 * a * c;
      if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { root1, root2 };
      } else if (discriminant == 0) {
        // const root1 = -b - 0 / (2 * a);
        // const root2 = -b + 0 / (2 * a);
        const root = -b / (2 * a);
        return { root };
      } else {
        return { 0: 0 };
      }
    }
  };
  console.log(solveQuadEquation(1, 4, 4));

  // Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
  const printArray = (arr: Array<any>) => {
    if (!arr) return;
    return arr.map((e: any, i: number) => i + 1 + ':' + e).join(' ');
  };

  console.log(printArray([1, 2, 3, 4]));

  // Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
  const showDateTime = () => {
    const date = new Date();
    return date.toLocaleString('en-GB');
  };

  console.log(showDateTime());

  // Declare a function name swapValues. This function swaps value of x to y.
  const swapValues = (x: number, y: number) => {
    return ` x = ${y} y = ${x} `;
  };

  console.log(swapValues(3, 4));

  // Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
  const reverseArray = (arr: Array<number | string>): Array<number | string> => {
    if (!arr) return [];
    const arrReverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReverse.push(arr[i]);
    }
    return arrReverse;
  };

  console.log(reverseArray(['A', 'B', 'C']));

  // Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
  const capitalizeArray = (arr: Array<string>): Array<string> => {
    if (!arr) return [];
    const arrCapitalize = [];
    for (let i = 0; i < arr.length; i++) {
      arrCapitalize.push(arr[i].toUpperCase());
    }
    return arrCapitalize;
  };

  console.log(capitalizeArray(['a', 'b', 'c']));

  // Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
  const addItem = (item: any): Array<any> => {
    if (!item) return [];
    let arrItems = [];
    arrItems.push(item);
    return arrItems;
  };

  console.log(addItem('a'));

  // Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
  const removeItem = (arr: Array<any>, index: number): Array<any> => {
    if (!arr && !index) return [];
    arr.splice(index, 1);
    return arr;
  };

  console.log(removeItem(['a', 'b', 'c'], 1));

  // Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
  const evensAndOdds = (num: number): string => {
    if (!Number.isInteger(num)) {
      return 'number is not integer';
    } else if (num % 2 == 0) {
      return `The number of evens are ${num / 2 + 1}, The number of odds are ${num / 2}`;
    } else {
      return `The number of odds are ${num / 2}, The number of evens are ${num / 2 + 1}`;
    }
  };
  console.log(evensAndOdds(100));

  // Write a function which takes any number of arguments and return the sum of the arguments.
  function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  console.log(sum());

  // Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

  const userIdGenerator = (length: number) => {
    let text = '';
    const char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  };

  console.log(userIdGenerator(7));

  // Exercises: Level 3
  // Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
  /*const userIdGeneratedByUser = () => {
    const numOfCharacter: number = parseInt(prompt('please enter number of characters:') || '');
    const numOfIds: number = parseInt(prompt('please enter number of ids:') || '');
    if (numOfCharacter === undefined && numOfIds === undefined) {
      return 'numOfCharacter and numOfIds not a number';
    } else {
      let arrRandom = '';
      for (let i = 0; i < numOfIds; i++) {
        arrRandom += `${userIdGenerator(numOfCharacter)}\n`;
      }
      return arrRandom;
    }
  };*/

  // console.log(userIdGeneratedByUser());

  // Write a function generateColors which can generate any number of hexa or rgb colors.

  function random_color(format: 'hex' | 'hexa' | 'rgb') {
    let rint = Math.floor(0x100000000 * Math.random());
    switch (format) {
      case 'hex':
        return '#' + ('00000' + rint.toString(16)).slice(-6).toUpperCase();
      case 'hexa':
        return '#' + ('0000000' + rint.toString(16)).slice(-8).toUpperCase();
      case 'rgb':
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';

      default:
        return rint;
    }
  }

  const generateColors = (typeColor: 'hex' | 'hexa' | 'rgb', length: number): Array<string | number> => {
    if (!typeColor) return [];
    const arrColor = [];
    for (let i = 0; i < length; i++) {
      arrColor.push(random_color(typeColor));
    }
    return arrColor;
  };

  console.log(generateColors('rgb', 3));

  // Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array: Array<number | string>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  console.log(shuffleArray([1, 2, 3, 4]));

  // Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
  function factorial(num: number): number {
    if (num === 0 || num === 1) return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  console.log(factorial(2));

  // Call your function isEmpty, it takes a parameter and it checks if it is empty or not
  function empty(n: any) {
    return !(!!n ? (typeof n === 'object' ? (Array.isArray(n) ? !!n.length : !!Object.keys(n).length) : true) : false);
  }
  //with number
  console.log(empty(0)); //true
  console.log(empty(10)); //false

  //with object
  console.log(empty({})); //true
  console.log(empty({ a: 'a' })); //false

  //with array
  console.log(empty([])); //true
  console.log(empty([1, 2])); //false

  //with string
  console.log(empty('')); //true
  console.log(empty('a')); //false

  // Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
  const average = (arr: number[]): string => {
    if (!Array.isArray(arr)) return 'not number array';
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;

    return `The sum of all the elements is: ${sum}  The average is: ${avg}`;
  };

  console.log(average([1, 2, 3, 4]));
};
