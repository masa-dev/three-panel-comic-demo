import checkNgWords from "@/util/checkNgWords";
import ngWords from "@/util/ngWords.json";

test("NGワード確認関数の動作確認", () => {
  for (let word of ngWords.data) {
    // すべての単語
    expect(checkNgWords(word)).toBe(true);

    // 単語を含む文字列
    expect(checkNgWords(`before${word}after`));
  }
});
