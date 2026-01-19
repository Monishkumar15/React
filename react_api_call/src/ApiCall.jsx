import React, { useEffect, useState } from "react";
import axios from "./axios";

const ApiCall = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiCallAxios = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("/products");
      setData(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Auto call on page load
//   useEffect(() => {
//     apiCallAxios();
//   }, []);

  return (
    <div>
      <h2>API Practice</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={apiCallAxios}>API Call</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <pre>{JSON.stringify(data, ["id","title","price"], 2)}</pre> */}
    </div>
  );
};

export default ApiCall;
