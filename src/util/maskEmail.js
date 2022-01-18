/**
 * メールアドレスをマスキングする関数
 * @param {String} email メールアドレスの文字列
 * @returns {String} マスキング後のメールアドレス
 */
function maskEmail(email) {
  if (email && typeof email === "string") {
    return email.replace(/^\w+([-+.]\w+)*@/, (match) => {
      let masked = "";
      let startString = "";
      let endString = "";
      const length = match.length;
      // メールの長さ次第で表示領域を変える
      const displayLength = length > 8 ? 2 : 1;

      // 表示する最初と最後の文字列を抽出
      startString = match.slice(0, displayLength);
      endString = match.slice(length - displayLength - 1, length);

      // 表示しない部分は * でマスキングする
      masked =
        startString + "*".repeat(length - displayLength * 2 - 1) + endString;
      return masked;
    });
  } else {
    return `${email} is not a string`;
  }
}

export default maskEmail;
