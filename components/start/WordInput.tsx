// import { ChangeEvent, forwardRef, Ref } from "react";

// interface Props {
//   value: string;
//   index: number;
//   onChange: (v: string, i: number) => void;
// }

// // forwardRef를 사용할 때 타입을 명확하게 지정 (화살표 함수로)
// const WordInput = forwardRef<HTMLInputElement, Props>(
//   ({ value, index, onChange }, ref: Ref<HTMLInputElement>) => {
//     const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//       onChange(e.target.value, index);
//     };

//     return (
//       <input
//         type="text"
//         value={value}
//         onChange={inputChangeHandler}
//         ref={ref}
//         maxLength={1}
//         className="size-16 rounded-md bg-slate-200 text-black"
//       />
//     );
//   }
// );

// // forwardRef를 사용할 때는 컴포넌트에 displayName을 설정
// WordInput.displayName = "WordInput";

// export default WordInput;

import React, { ChangeEvent, forwardRef } from "react";

interface Props {
  value: string;
  index: number;
  onChange: (v: string, i: number) => void;
}

const WordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, index, onChange } = props;

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, index);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={inputChangeHandler}
      ref={ref}
      maxLength={1}
      className="size-16 rounded-md bg-slate-200 text-black"
    />
  );
});

// displayName을 설정하여 React 개발자 도구에서 식별 가능하게 함
WordInput.displayName = "WordInput";

export default WordInput;
