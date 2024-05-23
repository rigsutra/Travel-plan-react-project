import data from "./Data";
import Tours from "./Components/Tours";
import { useState } from "react";


const App = () => {
  const [tours, setTours] = useState(data);

  function removeTours(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div>
        <h2>No Tour Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <div>
        <Tours tours={tours} removeTours={removeTours} />
      </div>
    </div>
  );
 
};

export default App;

// Check if the tour is removed or not

