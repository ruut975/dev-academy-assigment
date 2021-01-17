import React from "react";

import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.Header}>
    <div className={classes.Info}>
      <div className={classes.InfoItem}></div>
      <h1 className={classes.InfoItem}>NameLister</h1>
      <h5 className={classes.InfoItem}>Ruut Putkonen</h5>
    </div>
  </header>
);

export default Header;
