import axios from "axios";

export default {
  // Gets all books
  getStocks: function() {
    return axios.get("/api/saved");
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveStocks: function(stockData) {
    return axios.post("/api/saved", stockData);
  }
};