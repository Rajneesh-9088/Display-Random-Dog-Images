import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import HomeScreen from "./HomeScreen";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
        setUsername(data.username);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/");
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div style={{ background: "green", color: "white" }}>
        <h1>{username}</h1>
        {privateData}
        <button
          onClick={logoutHandler}
          style={{ margin: "10px", color: "red" }}
        >
          {" "}
          Logout{" "}
        </button>
      </div>
      <HomeScreen />
    </>
  );
};

export default PrivateScreen;
