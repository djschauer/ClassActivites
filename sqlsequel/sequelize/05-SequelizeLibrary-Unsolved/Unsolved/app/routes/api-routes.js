// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll().then(books => {
      res.json(books);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    bookTitle = req.params.book;
    Book.findAll({ where: {title: bookTitle} }).then(books => {
      res.json(books);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    bookGenre = req.params.genre;
    Book.findAll({ where: {genre: bookGenre} }).then(books => {
      res.json(books);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    bookAuthor = req.params.author;
    Book.findAll({ where: {author: bookAuthor} }).then(books => {
      res.json(books);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    Book.findAll({ where: {pages: { [Op.gte]: 425} } }).then(books => {
      res.json(books);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    Book.findAll({ where: {pages: { [Op.lt]: 425 } } }).then(books => {
      res.json(books);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    Book.create({
      title: title,
      author: author,
      genre: genre,
      pages: pages
    })
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    
  });

};
