const Quote = (props) => {
    const {kanyeQuote, setKanyeQuote} = props;

    return (
        <div>
            <p
                className="text"
            >
                {kanyeQuote}
            </p>
            <p
                className="author"
            >
                - Kanye West
            </p>
            <button
                className="new-quote"
                onClick={() => setKanyeQuote('')}
            >
                New Quote
            </button>
        </div>
    )
}

export default Quote;