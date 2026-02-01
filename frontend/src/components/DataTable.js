import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DataTable({ data }) {
  const { dark } = useContext(ThemeContext);

  return (
    <table style={{ width: "100%", marginTop: 16 }}>
      <tbody>
        {Object.entries(data || {}).map(([k, v]) => (
          <tr key={k}>
            <td
  style={{
    padding: 12,
    fontWeight: "600",
    background: "var(--bg-table-key)",
    color: "var(--text-primary)",
    borderBottom: "1px solid var(--border)"
  }}
>

              {k}
            </td>
            <td
  style={{
    padding: 12,
    color: "var(--text-secondary)",
    borderBottom: "1px solid var(--border)"
  }}
>

              {String(v)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
