import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import Header from "../../components/Header/Header";
import NameListingTable from "../../components/NameListingTable/NameListingTable";
import NameSearch from "../../components/NameSearch/NameSearch";

import "semantic-ui-css/semantic.min.css";
import classes from "./NameLister.module.css";

const NameLister = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/names`)
      .then((res) => {
        setNames(res.data.names);
      })
      .catch((err) => console.log(err));
  }, []);

  const countSumOfNames = () => {
    const numArray = names.map((item) => item.amount);
    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    return sum;
  };

  const findName = (name) => {
    const found = names.find((item) => item.name.toLowerCase() === name);
    return found;
  };

  let table = null;
  let input = null;

  if (names.length) {
    table = (
      <NameListingTable
        className={classes.Wrapper}
        nameData={names}
        sumOfNames={countSumOfNames()}
      />
    );
    input = <NameSearch search={findName} />;
  } else {
      table = <h3>Unable to load names...</h3>
  }
  return (
    <div className={classes.NameLister}>
      <Header />
      <main className={classes.Wrapper}>
        {input}
        {table}
      </main>
    </div>
  );
};

export default NameLister;
