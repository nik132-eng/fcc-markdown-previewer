import React from 'react';
import ReactMarkdown from 'react-markdown';

interface InputProps {
    input: string;
}

const Preview: React.FC<InputProps> = ({ input }) => {
    return (
        <div>
            <div id="preview">
                <ReactMarkdown>{input}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Preview;
