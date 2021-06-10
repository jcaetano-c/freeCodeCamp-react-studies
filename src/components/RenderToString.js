import React from "react";
import ReactDOMServer from "react-dom/server";

class RenderToString extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello world from Server Side</h1>
      </div>
    );
  }
}
ReactDOMServer.renderToString(<RenderToString />);

export default RenderToString;
