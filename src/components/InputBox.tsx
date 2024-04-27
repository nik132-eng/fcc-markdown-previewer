import React from 'react';

interface InputBoxProps {
  setValueInput: (value: string) => void;
  defaultValue: string | number | readonly string[] | undefined
}

const InputBox: React.FC<InputBoxProps> = ({ setValueInput , defaultValue}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueInput(e.target.value);
  };

  return (
    <div>
      <textarea id="editor" onChange={handleChange}  defaultValue={defaultValue}/>
    </div>
  );
};

export default InputBox;
