function timeConversion(s) {
  // Write your code here
  let twelve = s;
  let arr = twelve.split("");
  if (arr[arr.length - 2] === "A" && parseInt(arr[0] + arr[1]) < 12) {
    arr.length = 8;
    return arr.join("");
  } else if (arr[arr.length - 2] === "A" && parseInt(arr[0] + arr[1]) === 12) {
    arr[0] = 0;
    arr[1] = 0;
    arr.length = 8;
    return arr.join("");
  } else {
    if (parseInt(arr[0] + arr[1]) === 12) {
      arr.length = 8;
      return arr.join("");
    } else {
      let number = parseInt(arr[0] + arr[1]);
      number += 12;
      let arr2 = `${number}`.split();
      arr[0] = arr2[0];
      arr[1] = arr2[1];
      arr.length = 8;
      return arr.join("");
    }
  }
}
console.log(timeConversion("07:05:45PM"));
