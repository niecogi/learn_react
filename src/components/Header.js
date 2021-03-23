import React from "react";
import ReactDOM from "react-dom";
import ButtonGroup from "@material-ui/core/Button";
import { Button } from "@material-ui/core";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <ButtonGroup variant="text" color="primary" size="small">
            <Button>File</Button>
            <Button>Simulator</Button>
            <Button>Registers</Button>
            <Button>Text Segment</Button>
            <Button>Data Segment</Button>
            <Button>Window</Button>
            <Button>Help</Button>
          </ButtonGroup>
        </div>
      </header>
    );
  }
}
export default Header;
