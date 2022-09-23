import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [airport, setAirport] = useState("BOO");
  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);

  useEffect(() => {
    fetch(
      `https://waainfoscreen-test.wf.aero/infoscreen/flightinfo/${airport}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setArrivals(data.arrivals);
        setDepartures(data.departures);
      });
  }, []);

  return (
    <div className="App">
      <p>Hello world</p>
      {arrivals &&
        arrivals.map((flight, index) => (
          <div key={index}>
            <p>{flight.id}</p>
          </div>
        ))}

      {departures &&
        departures.map((flight, index) => (
          <div key={index}>
            <p>{flight.id}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
