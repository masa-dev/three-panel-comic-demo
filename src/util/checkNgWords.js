import ngWords from "./ngWords.json";

/**
 * 文字列内にNGワードが含まれているかチェックする
 * @param {String} str チェックする文字列
 * @returns {Boolean} true または false
 */
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
