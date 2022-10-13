import React from "react";

const CreateTodo = ({ handleOnChangeTodoForm, handleTodoSubmit }) => {
    return (
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>todo</label>
                        <input
                            type="text"
                            onChange={(e) => handleOnChangeTodoForm(e)}
                            name="todo"
                            placeholder="todo"
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input
                            type="text"
                            onChange={(e) => handleOnChangeTodoForm(e)}
                            name="category"
                            placeholder="category"
                        />
                    </div>
                    <div className="input-group">
                        <label>author</label>
                        <input
                            type="text"
                            onChange={(e) => handleOnChangeTodoForm(e)}
                            name="author"
                            placeholder="author"
                        />
                    </div>
                    <button
                        className="submit-button"
                        onClick={() => handleTodoSubmit()}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTodo;
