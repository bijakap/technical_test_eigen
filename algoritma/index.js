const header = (message, input, callback) => {
  console.log("=============================");
  console.log(message + "\n" + "Input : ");
  console.log(input);
  console.log("\n" + "Output :");
  callback();
  console.log("=============================");
};

// initial Value
const word = "NEGIE1";
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

// reverse Alphabet only
const ReverseWordOnly = (word) => {
  var split = word.split("");
  var result = [];
  var number = [];
  for (var i = split.length - 1; i >= 0; i--) {
    if (/[a-zA-Z]/.test(split[i])) {
      result.push(split[i]);
    } else {
      number.push(split[i]);
    }
  }

  console.log([...result, ...number].join(""));
};

// longest word in sentence
const Longest = (sentence) => {
  var split = sentence.split(" ");
  var longest_length = split[0].length;
  var longest = split[0];
  split.forEach((element) => {
    if (longest_length < element.length) {
      longest_length = element.length;
      longest = element;
    }
  });

  console.log(`${longest} : ${longest_length} character`);
};

// the number of queries that appear in the array
// return Object
const CountQueries = (QUERY, INPUT) => {
  var object = {};
  object = QUERY.reduce((object, key) => {
    object[key] = 0;
    return object;
  }, object);

  Object.keys(object).forEach((key) => {
    for (var i = 0; i < INPUT.length; i++) {
      if (key === INPUT[i]) {
        object[key]++;
      }
    }
  });
  console.log(object);
};

// Return Array
const CountQueries2 = (QUERY, INPUT) => {
  var result = [];

  for (var i = 0; i < QUERY.length; i++) {
    var count = 0;
    for (var j = 0; j < INPUT.length; j++) {
      if (QUERY[i] === INPUT[j]) {
        count++;
      }
    }
    result.push(count);
  }

  console.log(result);
};

// matrix subtraction
function diagonalSum(Matrix) {
  let diag1 = 0;
  let diag2 = 0;
  const n = Matrix.length;

  for (let i = 0; i < n; i++) {
    diag1 += Matrix[i][i];
    diag2 += Matrix[i][n - i - 1];
  }

  console.log(`${diag1} - ${diag2} = ${diag1 - diag2}`);
}

//Output
header("Reverse Word Only", word, () => {
  ReverseWordOnly(word);
});

header("Longest word in sentence", sentence, () => {
  Longest(sentence);
});

header("the number of queries that appear in the array", sentence, () => {
  CountQueries(QUERY, INPUT);
  CountQueries2(QUERY, INPUT);
});

header("Matrix diagonal subtraction", Matrix, () => {
  diagonalSum(Matrix);
});
