import React, { useState } from "react";
import data from "./data";
import List from "./list";
function App() {
  const [people, setPeople] = useState(data);
  function clearAllRecords() {
    return setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>
          {people.length}
          birthdays today
        </h3>
        <List people={people} />
        <button onClick={clearAllRecords}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
