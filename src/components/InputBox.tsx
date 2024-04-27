import React from 'react';

interface InputBoxProps {
  setValueInput: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ setValueInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueInput(e.target.value);
  };

  return (
    <div>
      <textarea id="editor" onChange={handleChange} />
    </div>
  );
};

export default InputBox;
