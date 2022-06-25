import React, { useEffect, useState } from "react";

function fetchCities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Miami" },
        { id: 2, name: "New York City" },
        { id: 3, name: "Ulm" },
      ]);
    }, 2000);
  });
}

function App() {
  const [cities, setCities] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>City tour</h1>
      <div className="col-12">
        <ul className="list-group city--list">
          <li className="list-group-item city--header">List of cities</li>
          {cities.map((rec) => (
            <li key={rec.id} className="list-group list-group-item-action">
              {rec.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
