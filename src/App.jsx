import { useState } from "react";
import "./index.css";


const ToDoList = ["lavare i piatti","fare la spesa","portare fuori il cane"];

   function App() {
    const [ToDo, setToDo] = useState(ToDoList);
    const [newDo, setNewDo] = useState("");
  
    // Aggiungere un nuovo task
    const addDO = (e) => {
      e.preventDefault();
      const task = newDo.trim();
      if (task) {
        setToDo([...ToDo, task]);
        setNewDo("");
      }
    };
  
    // Eliminare un task
    const removeTask = (index) => {
      setToDo(ToDo.filter((_, i) => i !== index));
    };
  
    return (
      <div className="container">
        <h1>Lista delle cose da fare</h1>
        <ul className="todo-list">
          {ToDo.map((task, index) => (
            <li key={index} className="todo-item">
              <span className="task-text">{task}</span>
              <button className="delete-btn" onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
  
        <form onSubmit={addDO} className="todo-form">
          <input
            type="text"
            className="todo-input"
            placeholder="Aggiungi un nuovo task..."
            value={newDo}
            onChange={(e) => setNewDo(e.target.value)}
          />
          <button className="add-btn">Aggiungi</button>
        </form>
      </div>
    );
  }
  
  export default App;