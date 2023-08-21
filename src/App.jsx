import { useEffect, useState } from "react";

import "./App.css";
import MyTable from "./Components/MyTable/MyTable";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <MyTable data={data}></MyTable>
    </>
  );
}

export default App;
