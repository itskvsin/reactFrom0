import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const title = (
    <h1 id="heading">Welcome User 👩‍🚀🚀</h1>
) 

const HeadingComponent = () => (
  <div>
    {title}
    <h1>Welcome To My React Project</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);