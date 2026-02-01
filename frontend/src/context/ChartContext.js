import { createContext, useEffect, useState } from "react";

export const ChartContext = createContext([]);

export function ChartProvider({ children }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => [
        ...prev.slice(-9),
        {
          time: new Date().toLocaleTimeString(),
          memory: Math.round(200 + Math.random() * 300)
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ChartContext.Provider value={chartData}>
      {children}
    </ChartContext.Provider>
  );
}
