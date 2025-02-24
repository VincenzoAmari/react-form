import { useState } from "react";

const ToDoList = ["lavare i piatti","fare la spesa","portare fuori il cane"];

function App() {

  const [ToDo, setTODO] = useState(ToDoList);
  const [newDo, setNewDo] = useState('');

  const addDO = (e) => {
    e.preventDefault();
    const task = newDo.trim();
    setTODO([...ToDo, task]);
    setNewDo('');
  };

  
  return (
    <>
      <h1>Lista delle cose da fare</h1>
      <ul>
        {ToDo.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <form onSubmit={addDO}>
        <input
          type="text"
          className="form-control"
          placeholder="Cose da fare oggi!!"
          value={newDo}
          onChange={(e) => setNewDo(e.target.value)}
        />
        <button className="btn btn-primary mt-2">Aggiungi</button>
      </form>
    </>
  );
}
export default App;