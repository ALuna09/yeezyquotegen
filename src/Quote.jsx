const Quote = (props) => {
    const {kanyeQuote, grabQuote} = props;
    
    return (
        <div>
            <p
                id="text"
            >
                "{kanyeQuote}"
            </p>
            <p
                id="author"
            >
                - Kanye West
            </p>
            <a
                id="tweet-quote"
                href="https://twitter.com/intent/tweet"
                target="_blank"
            >
              Tweet Quote  
            </a>
            <button
                id="new-quote"
                onClick={() => grabQuote()}
            >
                New Quote
            </button>
        </div>
    )
}

export default Quote;