import { useEffect } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function Home() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    // client.models.Todo.observeQuery().subscribe({
    //   next: (data) => setTodos([...data.items]),
    // });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("My Measure (from Device):") });
  }

  return (
    <main>
      <h1>Patient - My Measure</h1>
      <button onClick={createTodo}>Add Measure</button>
    </main>
  );
}


  export default Home;