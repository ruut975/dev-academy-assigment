import React, { useState, Fragment } from "react";
import { Input } from "semantic-ui-react";

const NameSearch = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value.trim().toLowerCase());
  };

  const found = props.search(input);
  let result = "";
  if (input.length) {
    result = found ? (
      <h4>
        Found {found.amount} persons with a name of {found.name}
      </h4>
    ) : (
      <p>No matching name found</p>
    );
  }

  return (
    <Fragment>
      <Input icon='users' iconPosition='left' placeholder="Type name..." onChange={(e) => inputHandler(e)} />
      {result}
    </Fragment>
  );
};

export default NameSearch;
