"use client";

import {useEffect, useState} from "react";
import MermaidRenderer from "@/components/MermaidRenderer";

const App = () => {

  const [mermaidChart, setMermaidChart] = useState("");

  useEffect(() => {
    const fetchMermaidChart = async () => {
      try {
        const response = await fetch("/api/mermaid/chart");
        if (!response.ok) {
          throw new Error("Failed to fetch Mermaid chart");
        }
        const data = await response.json();
        setMermaidChart(data.text || "");
      } catch (error) {
        console.error(error);
      }
    };

    fetchMermaidChart();
  }, []);

  return (
    <div>
      <h1>Mermaid Flowchart</h1>
      <MermaidRenderer text={mermaidChart}/>
    </div>
  );
};

export default App;
