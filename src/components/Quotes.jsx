import React from "react";

function Quotes({quotes}) {
    return (
        quotes && (
            <div>
                <img src={quotes.image} alt={quotes.character} />
                <p>{quotes.character}</p>
                <p>{quotes.quote}</p>
            </div>
        )
    );
}

export default Quotes;