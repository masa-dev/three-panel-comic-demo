/**
 * 文字列の"true", "false"をbool値に変換する
 * @param {String} str 文字列化したBool値
 * @returns {Boolean} true または false
 */
function parseToBoolean(str) {
  let boolStr = str.toLowerCase();
  if (boolStr === "true") {
    return true;
  } else if (boolStr === "false") {
    return false;
  } else {
    console.error(`入力値が正しくありません。\n入力値 : ${str}`);
  }
}

export default parseToBoolean;
