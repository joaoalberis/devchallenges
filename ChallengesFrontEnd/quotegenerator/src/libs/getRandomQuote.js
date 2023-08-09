import quotes from '../quotes.json'

export function randomQuote() {
    const quoteIndex = Math.round(Math.random() * 59)
    const quote = quotes[quoteIndex]

    return quote
}

export function getQuotesByAuthor(author) {
    const quotesAuthor = quotes.filter((quote) => {
        if (quote.author === author) return quote
    })

    return quotesAuthor
}