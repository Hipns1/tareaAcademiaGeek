import React, { useState, useEffect } from "react";
import { getData } from "../helpers/getData";
import { starCard } from "../helpers/starCard";
import { url } from "../helpers/url";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    starCard(data[2]);
    console.log(localStorage.getItem("starred"));

    console.log(data);
  }, [data]);

  return <div>Main</div>;
};

export default Main;
