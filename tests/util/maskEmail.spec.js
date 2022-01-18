import maskEmail from "@/util/maskEmail";

test("Emailマスキング関数の動作確認", () => {
  const shortEmail = "12345@email.com";
  const longEmail = "123456789@email.com";
  const notEmail = "123456789";
  const notStr = 12345;
  const errStr = `${notStr} is not a string`;

  // 長さの比較
  expect(maskEmail(shortEmail)).toHaveLength(shortEmail.length);
  expect(maskEmail(longEmail)).toHaveLength(longEmail.length);

  // マスキングの動作確認
  expect(maskEmail(shortEmail)).toBe(shortEmail.replace("234", "***"));
  expect(maskEmail(longEmail)).toBe(longEmail.replace("34567", "*****"));

  // Emailではない
  expect(maskEmail(notEmail)).toBe(notEmail);

  // エラー文
  expect(maskEmail(notStr)).toBe(errStr);
});
