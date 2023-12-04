/** @format */

// const family = function () {
//   let member = [];
//   let birth = function (name) {
//     member.push(name);
//     console.log(member);
//   };
//   return birth;
// };

// const giveBirth = family();

// giveBirth("yosi");



// const mathOperations = function () {
//   const add = function (x, y) {
//     return x + y;
//   };

//   const subtract = function (x, y) {
//     return x - y;
//   };

//   const multiply = function (x, y) {
//     return x * y;
//   };

//   const divide = function (x, y) {
//     return x / y;
//   };
//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide,
//   };
// };

// console.log(mathOperations().mult(7, mathOperations().div(36, 6)));

// const UsersModule = function () {
//   const _users = ["Aaron", "Avi"];
//   const addUser = function (user) {
//     _users.push(user);
//   };

//   const listUsers = function () {
//     for (let user of _users) {
//       console.log(user);
//     }
//   };

//   return {
//     addUser: addUser,
//     listUsers: listUsers,
//   };
// };

// const usersModule = UsersModule();

// usersModule.addUser("Narkis");
// usersModule.addUser("ofir");
// usersModule.addUser("buchy");
// usersModule.listUsers();

// console.log(usersModule._users);

// const StringFormatter = function () {
//   const capitalizeFirst = function (str) {
//     let newStr = str[0].toUpperCase();
//     str = str.slice(1);
//     newStr += str;
//     // console.log(str);
//     return newStr;
//   };
//   const toSkewerCase = function (str) {
//     let newStr = "";
//     for (let char in str) {
//       if (str[char] === " ") {
//         newStr = str.slice(0, char) + "-" + str.slice(parseInt(char) + 1);
//         return newStr;
//       }
//     }
//   };
//   return {
//     cap: capitalizeFirst,
//     skew: toSkewerCase,
//   };
// };
// const StringFormatterModule = StringFormatter();
// console.log(StringFormatterModule.skew("adir hino"));




// const Bank = function () {
//   let = _money = 500;

//   const depositCash = function (cash) {
//     _money += cash;
//   };

//   const checkBalance = function () {
//     console.log("your balance is: " + _money);
//   };
//   return {
//     deposit: depositCash,
//     showBalance: checkBalance,
//   };
// };

// const bank = Bank();
// bank.deposit(200);
// bank.deposit(250);
// bank.showBalance(); //should print 950



const SongsManager = function () {
  const _songs = {};
  const addSong = function (name, url) {
    for (let i in url) {
      if (url[i] === "=") {
        _songs[name] = url.slice(i);
      }
    }
  };
  const getSong = function (name) {
    if (_songs[name]) {
      console.log("https://www.youtube.com/watch?v=" + _songs[name]);
    }
  };
  return {
    addSong: addSong,
    getSong: getSong,
  };
};

const SongsManagerModule = SongsManager();

SongsManagerModule.addSong(
  "stay alive",
  "https://www.youtube.com/watch?v=ZbZSe6N_BXs"
);
SongsManagerModule.getSong("stay alive");
