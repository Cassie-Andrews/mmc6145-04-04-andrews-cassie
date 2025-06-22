// TODO: import actions and implement reducer for each action
import { ADD_BOOK, SEARCH_BOOKS, REMOVE_BOOK } from "./actions" 

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}


export default function reducer(prevState, { action, payload } ) {
  switch(action) {
    case ADD_BOOK: {
      const updatedFavoriteBooks = [...prevState.favoriteBooks, payload]
      saveToLocalStorage(updatedFavoriteBooks)
      return {
        ...prevState,
        favoriteBooks: updatedFavoriteBooks
      }
    }

    case REMOVE_BOOK: {      
      const updatedFavoriteBooks = prevState.favoriteBooks.filter(
        book => book.id !== payload
      )
      saveToLocalStorage(updatedFavoriteBooks)
      return {
        ...prevState,
        favoriteBooks: updatedFavoriteBooks
      }
    }

    case SEARCH_BOOKS: {
      return {
        ...prevState,
        bookSearchResults: payload
      }
    }

    default:
      return prevState
  }
}