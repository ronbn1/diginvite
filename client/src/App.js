import React, { useContext, useEffect } from "react";
import { GlobalStyle } from "./utils/GlobalStyle";
import setAuthToken from "./utils/setAuthToken";
import Home from "./Pages/Home";
import Context from "./Context";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const context = useContext(Context);

  useEffect(() => {
    context.loadUser();
  }, [context.userState.id]);

  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
