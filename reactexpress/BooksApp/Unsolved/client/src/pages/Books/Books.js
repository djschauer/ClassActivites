import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState(
      { [name]: value }
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    })
    .then(res => this.loadBooks())
    .catch(err => console.log(err))
    }
  }

  componentDidMount() {
    this.loadBooks()
  };

  loadBooks() {
    API.getBooks()
    .then(res => {
      this.setState({ books: res.data})
    })
  };

  handleDelete(id) {
    console.log(id)
    API.deleteBook(id);
    this.loadBooks()
  } 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input onChange={this.handleInputChange} name="title" placeholder="Title (required)" />
              <Input onChange={this.handleInputChange} name="author" placeholder="Author (required)" />
              <TextArea onChange={this.handleInputChange} name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.handleFormSubmit}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={event => this.handleDelete(book._id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
