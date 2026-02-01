import { useEffect, useState } from "react";
import { fetchJson } from "../utils/api";
import DataTable from "../components/DataTable";

export default function AppInfo() {
  const [data, setData] = useState({});
  useEffect(() => fetchJson("/app", setData), []);
  return <>
    <h2>📦 App Info</h2>
    <DataTable data={data} />
  </>;
}
