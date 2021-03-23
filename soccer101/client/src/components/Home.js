import { useEffect, useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState("Hey");

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
      .catch((err) => err);
  });

  return <h1>{apiResponse}</h1>;
}
