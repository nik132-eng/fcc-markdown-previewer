import React from 'react';

interface InputProps {
    input: string;
}

const Preview: React.FC<InputProps> = ({ input }) => {
  return (
    <div>
        <div id="preview">
            {input ? input : "Nothing to display"}
        </div>
    </div>
  );
};

export default Preview;
