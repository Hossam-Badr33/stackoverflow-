let str = "hossam_badr";
str = str.replace("_", "@"); //1-by replace method
console.log(str);
str = str.replace(/@/, " ");//replace method with regular EX
console.log(str);
console.log(str[3]);
str[3] = "c"; //not immutable
console.log(str);
function modifyStr(word) {
  //2-convert to array=>loop=>modify=>to string again
  word = [...word].map((char) => (char === " " ? "_" : char)).join("");
  return word;
}
console.log(modifyStr(str));

function loopStr(word) {//to array => loop => to string
  let newWord = [...word];
  console.log(newWord);
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === "-") {
      newWord[i] = " ";
      console.log("yes");
    } else {
      newWord[i] = newWord[i];
      console.log(`no ${typeof newWord[i]}`);
    }
    //console.log(newWord.join("")); note modified string will not appear in this block
  }
  return newWord.join(""); //only here modified string exist
}
console.log(loopStr("hey-guys"));
