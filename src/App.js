import React, {Fragment, useContext} from "react";
import './App.css';
import {AuthPage} from "./components/AuthPage";
import {DataContext} from "./context/data/dataContext";

function App({header, content, footer}) {
    const {user} = useContext(DataContext);
  return (
      <Fragment>
          {!user ?
              <Fragment>
                  {header}
                  {content}
                  {footer}
              </Fragment>
              : <AuthPage/>}
      </Fragment>
  );
}

export default App;
