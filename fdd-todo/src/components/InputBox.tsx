import { useState } from "react";

const InputBox = () => {
  const [value, setValue] = useState("");
  const onChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-box">
      <input
        autoFocus
        placeholder="할 일을 입력하세요 !"
        onChange={onChage}
        value={value}
      />
    </div>
  );
};

export default InputBox;
