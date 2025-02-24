import { useState } from "react";

const ToDoList = ["lavare i piatti","fare la spesa","portare fuori il cane"];

function App() {

  const [ToDo, setTODO] = useState(ToDoList);
  const [newDo, setNewDo] = useState('');

  return (
    <>
      <form onSubmit={ToDo}>
          <input
            type="text"
            className="form-control"
            placeholder="Cose da fare oggi!!"
            value={newDo}
            onChange={(e) => setNewDo(e.target.value)}
          />

          <button className="">Aggiungi</button>
        </form>
      
    </>
  );
}

export default App;