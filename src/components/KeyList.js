import React from "react";

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function FrameworksList() {
  const renderFrameworks = frontEndFrameworks.map(function (item, index) {
    return <li key={index.toString()}>{item}</li>;
  });
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

export default FrameworksList;
