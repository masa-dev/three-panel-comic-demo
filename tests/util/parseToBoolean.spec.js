import parseToBoolean from "@/util/parseToBoolean";

test("文字列のブール値をBoolean型に変換する関数の動作確認", () => {
  const spyError = jest.spyOn(console, "error");
  spyError.mockImplementation((x) => x);

  // 小文字
  expect(parseToBoolean("true")).toBe(true);
  expect(parseToBoolean("false")).toBe(false);

  // 大文字
  expect(parseToBoolean("True")).toBe(true);
  expect(parseToBoolean("False")).toBe(false);
  expect(parseToBoolean("TRUE")).toBe(true);
  expect(parseToBoolean("FALSE")).toBe(false);

  // 未入力
  parseToBoolean();
  expect(console.error).toBeCalled();
});
