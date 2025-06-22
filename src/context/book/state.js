// TODO: Load/parse 'favoriteBooks' from localStorage
let favoriteBooks = []

try {
    // try to get items from localStorage
    // if items are found, display them for favoriteBooks
} catch {
    // catch error and display [] for favoriteBooks
}

// initial state should have keys bookSearchResults and favoriteBooks
const initialState = {
    // bookSearchResults should be an empty array
    bookSearchResults: [],
    // favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy
    favoriteBooks: []
}

// Export initial state object as default
export default initialState