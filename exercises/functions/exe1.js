/** @format */
//exe1
function isEven(num) {
  if (num % 2 == 0 && num == 0) {
    return true;
  } else {
    return false;
  }
}

//exe2
function isOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0 && arr[i] != 0) {
      return arr[i];
    }
  }
}

function is_Exists(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
}

//exe3

// function add(sum, num) {
//   return sum + num;
// }

// function subtract(sum, num) {
//   return sum - num;
// }

let calculator = {
  add: function (sum, num) {
    return sum + num;
  },
  subtract: function (sum, num) {
    return sum - num;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

//exe4

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  function makeRegal(name) {
    return "His Royal Highness " + name;
  }

  function increaseByNameLength(money, name) {
    return money * name.length;
  }

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
