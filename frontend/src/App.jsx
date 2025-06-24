import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const url = "http://localhost:1337/api/ping";
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error fetching API: ", err));
  });
  return (
    <>
      <h1>Welcome to my CMS</h1>
      <p>API says: {message}</p>
    </>
  );
}

export default App;
