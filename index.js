var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  katzDeliLine.shift;
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
    }
    else {
      var i = 0;
      var newArray = [];
        while (i < katzDeliLine.length) {
        newArray.push(` ` + `${i+1}. ` + katzDeliLine[i]);
        i++;
      }
      return `The line is currently:${newArray}`;
    }
}
