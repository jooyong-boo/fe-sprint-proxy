import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import {
    getAllBooks,
    createBook,
    getAllTodos,
    createTodo,
} from "./services/BookService";
import Footer from "./components/Footer";
import TodoTable from "./components/TodoTable";
import CreateTodo from "./components/CreateTodo";

function App() {
    const [bookShelf, setBookShelf] = useState({});
    const [books, setBooks] = useState([]);
    const [numberOfBooks, setNumberBooks] = useState(0);
    const [todoShelf, setTodoShelf] = useState({});
    const [todos, setTodos] = useState([]);
    const [numberOfTodos, setNumberTodos] = useState(0);

    const handleSubmit = () => {
        createBook(bookShelf).then(() => {
            setNumberBooks(numberOfBooks + 1);
        });
    };

    const handleTodoSubmit = () => {
        createTodo(todoShelf).then(() => {
            setTodoShelf(numberOfTodos + 1);
        });
    };

    const getAllBook = () => {
        getAllBooks().then((data) => {
            setBooks(data);
            setTodos([]);
            setNumberTodos(0);
            setNumberBooks(data.length);
        });
    };

    const getAllTodo = () => {
        getAllTodos().then((data) => {
            setTodos(data);
            setBooks([]);
            setNumberBooks(0);
            setNumberTodos(data.length);
        });
    };

    const handleOnChangeForm = (e) => {
        let inputData = bookShelf;
        if (e.target.name === "book") {
            bookShelf.book = e.target.value;
        } else if (e.target.name === "category") {
            bookShelf.category = e.target.value;
        } else if (e.target.name === "author") {
            bookShelf.author = e.target.value;
        }
        setBookShelf(inputData);
    };

    const handleOnChangeTodoForm = (e) => {
        let inputData = bookShelf;
        if (e.target.name === "todo") {
            bookShelf.book = e.target.value;
        } else if (e.target.name === "category") {
            bookShelf.category = e.target.value;
        } else if (e.target.name === "author") {
            bookShelf.author = e.target.value;
        }
        console.log(inputData);
        setTodoShelf(inputData);
    };

    return (
        <div className="main-wrapper">
            <div className="main">
                <Header />
                <CreateBook
                    bookShelf={bookShelf}
                    onChangeForm={handleOnChangeForm}
                    handleSubmit={handleSubmit}
                />
                <CreateTodo
                    todoShelf={todoShelf}
                    handleOnChangeTodoForm={handleOnChangeTodoForm}
                    handleTodoSubmit={handleTodoSubmit}
                />

                <DisplayBoard
                    numberOfBooks={numberOfBooks}
                    numberOfTodos={numberOfTodos}
                    getAllBook={getAllBook}
                    getAllTodo={getAllTodo}
                />
                <BookTable books={books} />
                <TodoTable todos={todos} />
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default App;
