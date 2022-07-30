// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods

abstract class Animal {
  skills: string[];

  constructor(public name: string, public age: number, public color: string, public legs: number) {
    this.skills = [];
  }

  saySomething(skills: string[]) {
    this.skills = skills;
  }
}

Animal.saySomething();

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
}

const dog = new Dog('Ki', 1, 'brown', 4);
dog.saySomething();

class Cat extends Animal {
  override saySomething() {
    console.log('I am a Cat of the Animal class');
    return 3;
  }
}

const cat = new Cat('Kity', 2, 'yellow', 4);
cat.saySomething();
// Exercises Level 2
// Override the method you create in Animal class
class Bird extends Animal {
  constructor(name: string, age: number, color: string, legs: number, public action: string) {
    super(name, age, color, legs);
  }

  getAction() {
    console.log(` I'm ${this.name} ${this.age} ${this.color} ${this.legs} and I ${this.action}`);
  }
}
// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
  ages: number[];

  constructor(ages: number[]) {
    this.ages = ages;
  }

  count(num: number): number;
  count(): number {
    return this.ages.length;
  }

  sum() {
    if (this.ages.length > 0) {
      let sum = 0;
      this.ages.forEach((age: number) => {
        sum += age;
      });
      return sum;
    }
    return 0;
  }

  min() {
    if (this.ages.length > 0) {
      return Math.min(...this.ages);
    }
    return 0;
  }

  max() {
    if (this.ages.length > 0) {
      return Math.max(...this.ages);
    }
    return 0;
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.ages.length);
  }

  median() {
    if (this.ages.length === 0) return 0;
    this.ages.sort(function (a, b) {
      return a - b;
    });

    const half = Math.floor(this.ages.length / 2);

    if (this.ages.length % 2) return this.ages[half];

    return (this.ages[half - 1] + this.ages[half]) / 2.0;
  }

  mode() {
    const mode: any = {};
    let max = 0,
      count = 0;

    this.ages.forEach((index) => {
      const item: number = this.ages[index];
      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    });
    return { max: max, count: count };
  }
}

export const Classes = () => {
  const dog1 = new Dog('bibi', 1, 'white', 4);
  const cat1 = new Cat('miu', 1, 'yellow', 4);

  console.log(dog1.saySomething());
  console.log(cat1.saySomething());

  const bird1 = new Bird('bibi', 1, 'white', 4, 'fly');

  bird1.getAction();

  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

  const sta1 = new Statistics(ages);

  console.log(sta1.count());
  console.log(sta1.sum());
  console.log(sta1.min());
  console.log(sta1.max());
  console.log(sta1.range());
  console.log(sta1.mean());
  console.log(sta1.median());
  console.log(sta1.mode());
};
