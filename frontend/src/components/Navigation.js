import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navigation() {
  const { dark, setDark } = useContext(ThemeContext);

  const tabs = [
    { path: "/", label: "Home" },
    { path: "/health", label: "Health" },
    { path: "/app", label: "App" },
    { path: "/version", label: "Version" },
    { path: "/metrics", label: "Metrics" },
    { path: "/uptime", label: "Uptime" }
  ];

  return (
    <nav style={{
      display: "flex",
      gap: 12,
      padding: 16,
      background: dark ? "#020617" : "#f1f5f9"
    }}>
      {tabs.map(t => (
        <NavLink
          key={t.path}
          to={t.path}
          style={({ isActive }) => ({
  padding: "8px 14px",
  borderRadius: 8,
  fontWeight: 500,
  color: isActive
    ? "var(--text-inverse)"
    : "var(--text-primary)",
  background: isActive ? "var(--accent)" : "transparent"
})}

        >
          {t.label}
        </NavLink>
      ))}

      <button
        onClick={() => setDark(!dark)}
        style={{
          marginLeft: "auto",
          padding: "6px 12px",
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
