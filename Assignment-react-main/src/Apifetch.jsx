import React, { useEffect, useState } from "react";

const Apifetch = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <ul>
        {user.map((every) => (
          <li key={every.id}>{every.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Apifetch;
