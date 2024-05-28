import React from 'react';

interface SimpleButtonProps {
    text: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SimpleButton = ({text, onClick}: SimpleButtonProps) => {
    return (
        <div    >
            <button 
                className="m-2 px-5 py-2 bg-slate-200 font-bold rounded-lg shadow-md hover:bg-slate-400 hover:shadow-lg transform hover:scale-125 transition-all duration-300"
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default SimpleButton;