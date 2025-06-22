// TODO: Load/parse 'favoriteBooks' from localStorage
let favoriteBooks = []

try {
    // try to get items from localStorage
    const storedFavorites = localStorage.getItem('favoriteBooks')
    // if items are found, display them for favoriteBooks
    favoriteBooks = storedFavorites ? JSON.parse(storedFavorites) : []
} catch (error) {
    // catch error and display [] for favoriteBooks
    console.error('Error')
    favoriteBooks = []
}

// initial state should have keys bookSearchResults and favoriteBooks
const initialState = {
    // bookSearchResults should be an empty array
    bookSearchResults: [],
    // favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy
    favoriteBooks: favoriteBooks
}

// Export initial state object as default
export default initialState