import ngWords from "./ngWords.json";

function checkNgWords(str = "") {
  let flag = false;

  ngWords.data.forEach((ngWord) => {
    if (str.match(ngWord)) {
      flag = true;
    }
  });

  return flag ? true : false;
}

export default checkNgWords;
