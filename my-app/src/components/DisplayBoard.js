import React from "react";

const DisplayBoard = ({
    numberOfBooks,
    getAllBook,
    getAllTodo,
    numberOfTodos,
}) => {
    return (
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                        {numberOfBooks || numberOfTodos}
                    </div>
                </div>
                <div className="get-button">
                    <button
                        onClick={() => getAllBook()}
                        style={{ marginRight: "1rem" }}
                    >
                        Get all Books
                    </button>
                    <button onClick={() => getAllTodo()}>Get all Todos</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayBoard;
