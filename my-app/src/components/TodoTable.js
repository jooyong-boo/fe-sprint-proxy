import React from "react";

const TodoTable = ({ todos }) => {
    if (todos.length === 0) return null;

    return (
        <div className="table-wrapper">
            <div className="table-box">
                <h2>My Todos</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Todo</th>
                                <th>Category</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0 ? "odd" : "even"
                                        }
                                    >
                                        <td>{index + 1}</td>
                                        <td>{todo.book}</td>
                                        <td>{todo.category}</td>
                                        <td>{todo.author}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoTable;
