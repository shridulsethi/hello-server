import { useEffect, useState } from "react";
import { fetchJson } from "../utils/api";
import { formatUptime } from "../utils/format";

export default function Uptime() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const load = () =>
      fetchJson("/uptime", d => setSeconds(d.uptimeSeconds));
    load();
    const i = setInterval(load, 5000);
    return () => clearInterval(i);
  }, []);

  return <>
    <h2>⏱ Server Uptime</h2>
    <div style={{ fontSize: 28, marginTop: 16 }}>
      {formatUptime(seconds)}
    </div>
  </>;
}
