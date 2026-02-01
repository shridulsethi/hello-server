import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { ChartContext } from "../context/ChartContext";

export default function Metrics() {
  const chartData = useContext(ChartContext);

  return (
    <div>
      <h2>📊 Live System Metrics</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        Real-time memory usage (updates every 2 seconds)
      </p>

      <div
        style={{
          width: "100%",
          height: 320,
          marginTop: 20,
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 12
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis
              dataKey="time"
              stroke="var(--text-secondary)"
              tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
            />
            <YAxis
              stroke="var(--text-secondary)"
              tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                color: "var(--text-primary)"
              }}
              labelStyle={{ color: "var(--text-primary)" }}
            />
            <Line
              type="monotone"
              dataKey="memory"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
