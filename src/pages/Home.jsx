import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [info, setInfo] = useState([]);
  const getInfo = async () => {
    const res = await fetch("https://frontend-mentor-apis-6efy.onrender.com/devjobs");
    const data = await res.json();
    setInfo(data.info);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="info">
      
    </div>
  );
};

export default Home;
