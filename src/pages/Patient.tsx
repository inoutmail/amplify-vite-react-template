import {useEffect, useState} from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
const Patient = () => {

    const [measure, setMeasure] = useState(0);
    const [measures, setMeasures] = useState<Array<Schema["Measure"]["type"]>>([]);


    useEffect(() => {
      client.models.Measure.observeQuery().subscribe({
        next: (data) => setMeasures([...data.items]),
      });
    }, []);

    function createMeasure() {
      client.models.Measure.create({ patId : 1, value : measure });
    }

    return (
      <main>
        <h1>Measure</h1>
        <input value={measure} onChange={(e) => setMeasure(Number(e.target.value))}  />
        <button onClick={createMeasure}>Submit Measure</button>
      </main>
    );
  };
  
  export default Patient;