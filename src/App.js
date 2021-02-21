import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Router } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
  }
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Stevie Notes
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        {/* Navbar.Collapse component ensures that on mobile devices, the two links will be collapsed */}
        <Navbar.Collapse className="justify-content-end">
          {/* activekey is set to the current path. this will highlight the link when we are on that page */}
          <Nav activeKey={window.location.pathname}>
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <>
                <LinkContainer to="/signup">
                  <Nav.Link>SignUp</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
