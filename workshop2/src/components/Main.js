import React, { useState, useEffect } from "react";
import { filterDate } from "../helpers/filterDate";
import { getData } from "../helpers/getData";
import { starCard } from "../helpers/starCard";
import { url } from "../helpers/url";

const Main = () => {
  const [data, setData] = useState([]);
  const [date2, setDate2] = useState("");
  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
    setDate2(new Date("2022-06-06T07:07:52.355Z"));
  }, []);

  useEffect(() => {
    // console.log(date2.getFullYear());
    // console.log(date2.toLocaleString("default", { day: "numeric" }));
    // console.log(date2.toLocaleString("default", { month: "long" }));
    console.log(
      filterDate(
        data,
        date2 !== "" ? date2 : new Date("2022-06-06T07:07:52.355Z")
      )
    );
    // starCard(data[2]);
    // console.log(localStorage.getItem("starred"));

    // console.log(data);
  }, [data, date2]);

  return <div>Main</div>;
};

export default Main;
