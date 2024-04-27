import { SetStateAction, useState } from "react";

import "./App.css";
import Preview from "./components/Preview";
import InputBox from "./components/InputBox";

function App() {
  const defaultMarkdown = `
# Heading 1
## Heading 2
[Link to Google](https://www.google.com)
\`Inline code\`

\`\`\`
// Code block
function greet() {
    console.log('Hello, world!');
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;
  const [input, setInput] = useState(defaultMarkdown);

  const setValueInput = (value: SetStateAction<string>) => {
    setInput(value);
  };

  return (
    <>
      <InputBox setValueInput={setValueInput}  defaultValue={defaultMarkdown}/>
      <Preview input={input} />
    </>
  );
}

export default App;
