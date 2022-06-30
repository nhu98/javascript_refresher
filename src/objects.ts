export type Product = ProductChild[];
export interface ProductChildRatings {
  userId: string;
  rate: number;
}
export interface ProductChild {
  _id: string;
  name: string;
  description: string;
  price: number;
  ratings: ProductChildRatings[];
  likes: any[];
}

export type User1 = UserChild[];
export interface UserChild {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  isLoggedIn: boolean;
}

export const Objects = () => {
  // Exercises: Level 1
  // Create an empty object called dog
  // let dog = {};
  // Print the the dog object on the console
  // console.log(dog);
  // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
  const dog = {
    name: 'squid',
    legs: 4,
    color: 'black',
    age: 1,
    bark: 'woof woof',
  };
  console.log(dog);
  // Get name, legs, color, age and bark value from the dog object
  console.log('get info:', `${dog.name}, ${dog.legs}, ${dog.color}, ${dog.age}, ${dog.bark}`);
  // Set new properties the dog object: breed, getDogInfo
  Object.defineProperty(dog, 'breed', {
    value: 'cho co',
    writable: true,
  });

  // Exercises: Level 2
  // Find the person who has many skills in the users object.

  enum Skills {
    'HTML',
    'CSS',
    'JavaScript',
    'MongoDB',
    'Express',
    'React',
    'Node',
    'Redux',
    'Python',
    'Node.js',
  }

  // enum MernStack {
  //   'MongoDB',
  //   'Express',
  //   'React',
  //   'Node',
  // }

  interface User {
    email: string;
    skills: Array<keyof typeof Skills>;
    age: number;
    isLoggedIn: boolean;
    points: number;
  }

  const users: Record<string, User> = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  };
  const arrUsers = Object.keys(users);

  const userSkillMax = arrUsers.reduce((prevUser, currUser) =>
    users[prevUser].skills.length > users[currUser].skills.length ? prevUser : currUser
  );
  console.log(userSkillMax);

  //Count logged in users,count users having greater than equal to 50 points from the following object.
  let loggedCount = 0;
  let greater50PointCount = 0;
  arrUsers.forEach((user) => {
    if (users[user].isLoggedIn) {
      loggedCount++;
    }
    if (users[user].points >= 50) {
      greater50PointCount++;
    }
  });
  console.log('count logged:', loggedCount);
  console.log('count user greater than equal to 50:', greater50PointCount);

  // Find people who are MERN stack developer from the users object
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  const arrMernDev = arrUsers.map((user, index) => {
    const found = mernStack.every((ele) => users[user].skills.includes(ele as keyof typeof Skills));
    if (found) {
      return arrUsers[index];
    }
    return '';
  });

  const filtered = arrMernDev.filter(function (value) {
    return value !== '';
  });
  console.log('people who are MERN stack developer:', filtered);

  // Set your name in the users object without modifying the original users object
  Object.defineProperty(users, 'Nhu', {
    value: {
      email: 'huynhquocnhu@gmail.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 23,
      isLoggedIn: false,
      points: 45,
    },
    writable: false,
  });
  console.log('User was add my name:', users);

  // Get all keys or properties of users object
  console.log('keys of users:', Object.keys(users));

  // Get all the values of users object
  console.log('values of users:', Object.values(users));

  // Use the countries object to print a country name, capital, populations and languages.
  const countries = {
    name: 'Viet Nam',
    capital: 'Ha Noi',
    populations: '9tr',
    language: 'VietNamese',
  };

  console.log(`${countries.name} ${countries.capital} ${countries.populations} ${countries.language} `);

  // Exercises: Level 3
  // Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
  // Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
  const personAccount = {
    firstName: 'Nhu',
    lastName: 'Huynh',
    incomes: [
      { income: 100, description: 'code' },
      { income: 50, description: 'play game' },
      { income: 200, description: 'chill' },
    ],
    expenses: [
      { expense: 100, description: 'gas' },
      { expense: 200, description: 'pay of food' },
      { expense: 300, description: 'go to club' },
    ],
    totalIncome: () => {
      let totalIncome = 0;
      personAccount.incomes.forEach((income) => {
        return (totalIncome += income.income);
      });
      return totalIncome;
    },
    totalExpense: () => {
      let totalExpense = 0;
      personAccount.expenses.forEach((expense) => {
        return (totalExpense += expense.expense);
      });
      return totalExpense;
    },
    accountInfo: () => {
      return `${personAccount.lastName} ${personAccount.firstName}`;
    },
    addIncome: (income: number, description: string) => {
      return personAccount.incomes.push({ income, description });
    },
    addExpense: (expense: number, description: string) => {
      return personAccount.expenses.push({ expense, description });
    },
    accountBalance: () => {
      return personAccount.totalIncome() - personAccount.totalExpense();
    },
  };

  // **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
  let users1: User1 = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ];

  const products: Product = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ];

  // Imagine you are getting the above users collection from a MongoDB database:
  // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
  const signUp = (username: string, email: string, password: string) => {
    if (
      users1.some((user) => {
        return user['username'] === username;
      })
    ) {
      console.log('account is exists please re signup!');
      return;
    } else {
      return users1.push({
        _id: `${Math.random()}`,
        username,
        email,
        password,
        createdAt: `${new Date(Date.now()).toUTCString()}`,
        isLoggedIn: false,
      });
    }
  };

  signUp('nhuhuynh', 'huynhquocnhu@gmail.com', '123456');
  console.log(users1);
  signUp('nhuhuynh', 'huynhquocnhu@gmail.com', '123456');

  //b. Create a function called signIn which allows user to sign in to the application
  const signIn = (username: string, password: string) => {
    if (
      !users1.some((user) => {
        return user['username'] === username;
      }) ||
      !users1.some((user) => {
        return user['password'] === password;
      })
    ) {
      console.log('username or passWord err!');
      return;
    } else if (
      users1.some((user) => {
        return user['username'] === username;
      }) &&
      users1.some((user) => {
        return user['password'] === password;
      })
    ) {
      console.log('Login success!');
      users1.forEach((user, index) => {
        if (user.username === username) {
          users1[index].isLoggedIn = true;
        }
      });
    }
  };

  signIn('nhuhuynh', '1234567');
  console.log(users1);

  // The products array has three elements and each of them has six properties:
  // a. Create a function called rateProduct which rates the product
  const rateProduct = (userId: string, productId: string, rate: number) => {
    const productIds = products.map((product) => product._id);
    if (
      !users1.some((user) => {
        return user['_id'] === userId;
      })
    ) {
      console.log('user not rating!');
      return;
    } else if (
      users1.some((user) => {
        return user['_id'] === userId;
      }) &&
      productIds.includes(productId)
    ) {
      products.forEach((product, index) => {
        if (product._id === productId) {
          let indexOfRateAlready = 0;
          products[index].ratings.forEach((rating, indexRate) => {
            if (rating.userId === userId) {
              indexOfRateAlready = indexRate;
            }
          });
          const userIdsInRate = products[index].ratings.map((rate) => rate.userId);
          if (userIdsInRate.includes(userId)) {
            products[index].ratings[indexOfRateAlready].rate = rate;
          } else {
            products[index].ratings.push({ userId: userId, rate });
          }
        }
      });
      console.log('rate success!');
    }
  };

  rateProduct('eefamr', 'eedfcf', 5);

  console.log(products);
  // b. Create a function called averageRating which calculate the average rating of a product
  products.forEach((product) => {
    Object.defineProperty(product, 'rateProduct', {
      value: () => {
        let ratingCount = 0;
        product.ratings.forEach((rating: { userId: string; rate: number }) => {
          ratingCount += rating.rate;
        });
        return ratingCount / product.ratings.length;
      },
    });
  });

  //Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
  const likeProduct = (userId: string, productId: string) => {
    const productIds = products.map((product) => product._id);
    if (
      !users1.some((user) => {
        return user['_id'] === userId;
      })
    ) {
      console.log('user not like!');
      return;
    } else if (
      users1.some((user) => {
        return user['_id'] === userId;
      }) &&
      productIds.includes(productId)
    ) {
      products.forEach((product) => {
        if (product._id === productId) {
          product.likes.filter((like, indexlike) => {
            if (like === userId) {
              product.likes.splice(indexlike, 1);
            } else {
              product.likes.push(userId);
            }
          });
        }
      });
      console.log('Like/unLike success!');
    }
  };

  likeProduct('aaa', 'hedfcg');
  console.log(products);
};
