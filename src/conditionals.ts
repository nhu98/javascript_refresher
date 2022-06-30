//Conditionals

//Exercises: Level 1

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

export const ConditionalsF = () => {
  const inputDefault: string = '18';
  const ageEnough: number = 18;
  let ageUserInput = inputDefault ? inputDefault : prompt('Enter your age:') || '';
  let age: number = parseInt(ageUserInput);
  switch (true) {
    case age >= 18:
      console.log('You are old enough to drive!');
      break;
    case age < 18:
      const numNeeds = ageEnough - age;
      console.log(`You are left with ${numNeeds} years to drive`);
      break;
    default:
      console.log('Entered value was not a age!');
  }
  //Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
  const myAgeDefault: string = '23';
  const yourAgeDefault: string = '20';
  const myAgeInput: string = myAgeDefault ? myAgeDefault : prompt('Enter my age:') || '';
  const myAge: number = parseInt(myAgeInput);
  const yourAgeInput = yourAgeDefault ? yourAgeDefault : prompt('Enter your age:') || '';
  const yourAge: number = parseInt(yourAgeInput);

  if (myAge > yourAge) {
    const numNeeds: number = myAge - yourAge;
    console.log(`You are ${numNeeds} years younger than me.`);
  } else if (yourAge > myAge) {
    const numNeeds: number = yourAge - myAge;
    console.log(`You are ${numNeeds} years older than me.`);
  } else if (myAge === yourAge) {
    console.log('You are equal me.');
  } else {
    console.log('Entered value was not a age!');
  }
  //If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

  const a: number = 4;
  const b: number = 3;
  //using if else
  if (a > b) {
    console.log('a is greater than b');
  } else if (a < b) {
    console.log('a is less than b');
  } else {
    console.log('a equal b');
  }
  //ternary operator
  const compare: string = a > b ? 'a is greater than b' : a < b ? 'a is less than b' : 'a equal b';
  console.log(compare);

  //Exercises: Level 2
  //Write a code which can give grades to students according to theirs scores:
  const score: number = 50;

  switch (true) {
    case score >= 0 && score <= 49:
      console.log('F');
      break;
    case score >= 50 && score <= 59:
      console.log('D');
      break;
    case score >= 60 && score <= 69:
      console.log('C');
      break;
    case score >= 70 && score <= 89:
      console.log('B');
      break;
    case score >= 80 && score <= 100:
      console.log('A');
      break;
    default:
      console.log('Entered value was not a score');
  }

  //Check if the season is Autumn, Winter, Spring or Summer. If the user input is
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

  const autumn: MonthsStrings[] = ['September', 'October', 'November'];
  const winter: MonthsStrings[] = ['December', 'January', 'February'];
  const spring: MonthsStrings[] = ['March', 'April', 'May'];
  const summer: MonthsStrings[] = ['June', 'July', 'August'];

  const monthDefault: MonthsStrings | null = 'June';
  const monthName: MonthsStrings = monthDefault ? monthDefault : (prompt('Enter the month name?') as MonthsStrings);

  switch (true) {
    case autumn.includes(monthName):
      console.log('The season is Autumn');
      break;
    case winter.includes(monthName):
      console.log('The season is Winter');
      break;
    case spring.includes(monthName):
      console.log('The season is Spring');
      break;
    case summer.includes(monthName):
      console.log('The season is Summer');
      break;
    default:
      console.log('Entered value was not a month!');
  }

  //Check if a day is weekend day or a working day. Your script will take day as an input
  enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  type WeekStrings = keyof typeof Week;

  const dateDefault: WeekStrings | null = 'Wednesday';
  const dateOfWeek: WeekStrings[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const weekend: WeekStrings[] = ['Saturday', 'Sunday'];

  const dateName: WeekStrings = dateDefault ? dateDefault : (prompt('Enter day of week?') as WeekStrings);

  if (dateOfWeek.includes(dateName) && !weekend.includes(dateName)) {
    console.log(`${dateName} is a working day.`);
  } else if (dateOfWeek.includes(dateName) && weekend.includes(dateName)) {
    console.log(`${dateName} is a weekend.`);
  } else {
    console.log('Entered value was not a day of week!');
  }

  //Exercises: Level 3
  //Write a program which tells the number of days in a month.

  const monthNameInput: MonthsStrings = monthDefault ? monthDefault : (prompt('Enter a month?') as MonthsStrings);

  switch (monthNameInput.toLowerCase()) {
    case Months.January.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    case Months.February.toLowerCase():
      console.log(`${monthNameInput} has 29 days.`);
      break;
    case Months.March.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    case Months.April.toLowerCase():
      console.log(`${monthNameInput} has 30 days.`);
      break;
    case Months.May.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    case Months.June.toLowerCase():
      console.log(`${monthNameInput} has 30 days.`);
      break;
    case Months.July.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    case Months.August.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    case Months.September.toLowerCase():
      console.log(`${monthNameInput} has 30 days.`);
      break;
    case Months.October.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    case Months.November.toLowerCase():
      console.log(`${monthNameInput} has 30 days.`);
      break;
    case Months.December.toLowerCase():
      console.log(`${monthNameInput} has 31 days.`);
      break;
    default:
      console.log('Entered value was not a month name!');
  }

  //Write a program which tells the number of days in a month, now consider leap year.
  const yearDefault = 2022;
  const yearInput: number = yearDefault ? yearDefault : parseInt(prompt('Enter a year?') || '');

  const checkLeapYear = (year: number) => {
    //three conditions to find out the leap year
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      return true;
    } else {
      return false;
    }
  };

  checkLeapYear(yearInput);

  switch (monthNameInput.toLowerCase()) {
    case Months.January.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    case Months.February.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 29 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 28 days.`
        } `
      );
      break;
    case Months.March.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    case Months.April.toLowerCase():
      console.log(`${monthNameInput} has 30 days.`);
      break;
    case Months.May.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    case Months.June.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 30 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 30 days.`
        } `
      );
      break;
    case Months.July.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    case Months.August.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    case Months.September.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 30 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 30 days.`
        } `
      );
      break;
    case Months.October.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    case Months.November.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 30 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 30 days.`
        } `
      );
      break;
    case Months.December.toLowerCase():
      console.log(
        `${
          checkLeapYear(yearInput)
            ? `${yearInput} is a leap year ${monthNameInput} has 31 days.`
            : `${yearInput} is not a leap year ${monthNameInput} has 31 days.`
        } `
      );
      break;
    default:
      console.log('Entered value was not a month name or year!');
  }
};
