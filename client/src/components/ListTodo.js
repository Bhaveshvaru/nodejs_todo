import React, { Fragment, useState, useEffect } from 'react';
import EditTodo from './EditTodo';
const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  //deletetodos
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      console.log(deleteTodo);
    } catch (error) {
      console.log(error.message);
    }
  };

  //gettodos
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
      const json = jsonData.rows;
      console.log(json);
      setTodos(json);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, [todos]);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*  <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
       */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
