import { useEffect, useState } from "react";
import { fetchJson } from "../utils/api";
import DataTable from "../components/DataTable";

export default function Health() {
  const [data, setData] = useState({});
  useEffect(() => fetchJson("/health", setData), []);
  return <>
    <h2>🩺 Health</h2>
    <DataTable data={data} />
  </>;
}
