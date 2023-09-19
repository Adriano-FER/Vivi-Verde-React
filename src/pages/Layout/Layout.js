import React    from "react";
import template from "./Layout.jsx";

class Layout extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Layout