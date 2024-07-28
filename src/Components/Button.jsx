import React from 'react';

function Button({ newJokes, data }) {
    const copyToClipboard = () => {
            if(data){
                navigator.clipboard.writeText(data)
                .then(() => {alert("Joke copied to clipboard!")})
            }
    };

    return (
        <>
            <button onClick={newJokes} className="button">New Jokes</button>
            <button onClick={copyToClipboard} className="button">Copy Jokes</button>
        </>
    );
}

export default Button;
