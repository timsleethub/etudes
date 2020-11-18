import books from "./books.js";
import centralEvents from "./centralEvents.js";
import {groupBy} from "./functions.js";




let state = {
  books: books,
  cart: [],
  selectedGenre: null,
  cartView: null,
}


function calcBooks(state) {
  const bbg = groupBy(books, 'genre'); // { FANTASY: [{title: 'Discworld ....}], ...}
  return state.selectedGenre
    ? bbg[state.selectedGenre]
    : books;
}


/**
 * New cart sketch
 * returns [{isbn: '111', count: 1}]
 * @return Array<CartViewItem>
 *
 * Algo:
 * // stage 1: Books
 * [{isbn: 'wefwe' ...bookstuff} ...]
 *
 * // stage 2: Object Grouped by ISBN
 * const isbnGroups =
 * {'wefwe': [{...}, {...}],
 *  'isbn2': [{...}]}
 *
 *  cartIsbns = Object.keys(isbnGroups)
 *
 *
 * // stage 3: Object collapsed (iterate keys) (for isbn in grouped)
 * [{isbn: 'wefwe', count: 2}]
 */

function calcCartGroups(state) {
  const isbnGroups = groupBy(state.cart, 'isbn');
  return Object.keys(isbnGroups).map((isbn) => {
    const isbnBooks = isbnGroups[isbn]
    return {
      isbn: isbn,
      book: isbnBooks[0],
      count: isbnBooks.length,
    };
  })
}
function calcCartView(state) {
  const cartIsbns = calcCartGroups(state)
  return {
    cartGroups: cartIsbns,
    totalAmount: 1
  }
}


function calcSecondaryState (primaryState) {
  return {
    books: calcBooks(primaryState),
    cartView: calcCartView(primaryState),
  }
}

function setState(newState) {
  state = {...newState, ...calcSecondaryState(newState)};
  centralEvents.dispatchEvent({type: "stateChange"});
}


function bookByIsbn(isbn) {
  return books.find((book) => book.isbn === isbn);
}


export function addToCart(event) {
  const newState = {...state, cart: [...state.cart, bookByIsbn(event.isbn)]};
  setState(newState);
}


export function selectGenre(genreSelectEvent) {
  const newState = {...state, selectedGenre : genreSelectEvent.genreId}
  setState(newState);
}


export function getState() {
  return state;
}

