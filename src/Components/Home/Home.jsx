
import React, { useEffect, useState } from "react";
import "./Home.css"

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Hello ReqRes users!</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {users.map(user => (
          <div key={user.id} style={{ margin: 20, textAlign: "center" }}>
            <h2>{user.first_name}</h2>
            <p>{user.email}</p>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ borderRadius: "50%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
