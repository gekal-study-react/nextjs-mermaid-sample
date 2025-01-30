"use client";

import React from "react";
import MermaidRenderer from "@/components/MermaidRenderer";

const App = () => {
  const mermaidChart = `
    graph TD;
      A[Start] --> B{Is it working?};
      B -->|Yes| C[Finish];
      B -->|No| D[Fix it];
      D --> B;
  `;

  return (
      <div>
        <h1>Mermaid Flowchart</h1>
        <MermaidRenderer text={mermaidChart} />
      </div>
  );
};

export default App;
