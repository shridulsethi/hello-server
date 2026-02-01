import { useEffect, useState } from "react";
import { fetchJson } from "../utils/api";
import DataTable from "../components/DataTable";

export default function Version() {
  const [data, setData] = useState({});
  useEffect(() => fetchJson("/version", setData), []);
  return <>
    <h2>🔖 Version</h2>
    <DataTable data={data} />
  </>;
}
