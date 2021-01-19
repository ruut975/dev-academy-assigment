import React, { useState } from "react";
import { Input } from "semantic-ui-react";

import classes from "./NameSearch.module.css";

const NameSearch = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value.trim().toLowerCase());
  };

  const found = props.search(input);
  let result = "";
  if (input.length) {
    result = found ? (
      <h4 className={classes.ResultText}>
        Found {found.amount} persons with a name of {found.name}!
      </h4>
    ) : (
      <p className={classes.ResultText}>No matching name found</p>
    );
  }

  return (
    <div className={classes.Wrapper}>
      <Input className={classes.InputBar}icon='users' iconPosition='left' placeholder="Type name..." onChange={(e) => inputHandler(e)} />
      {result}
    </div >
  );
};

export default NameSearch;
