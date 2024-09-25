// ToDo : handleChange 함수를 외부 파일로 분리

"use client";

import { FormEvent, useRef, useState } from "react";
import WordInput from "./WordInput";

export default function WordInputForm() {
  const [letters, setLetters] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const inputChangeHandler = (v: string, i: number) => {
    const newLetters = [...letters];
    newLetters[i] = v.slice(0, 1); // 입력값의 첫 번째 문자만 저장
    setLetters(newLetters);

    // 현재 입력 필드에 문자를 입력한 후 다음 필드로 포커스 이동
    if (v && i < letters.length - 1) {
      inputRefs.current[i + 1]?.focus();
    }
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("입력문자", letters.join(""));
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col gap-8">
      <div className="flex gap-4">
        {letters.map((v, i) => (
          <WordInput
            key={i}
            value={v}
            index={i}
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={inputChangeHandler}
          />
        ))}
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
