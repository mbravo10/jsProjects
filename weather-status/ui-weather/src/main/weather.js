import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function CardData() {
  const [data, setData] = useState({
    temp: "",
    city: "",
  });

  useEffect(() => {
    dataInfo();
  }, []);

  const dataInfo = async () => {
    const info = await axios.get("http://localhost:2000/weather");
    setData({ temp: info.data.main.temp, city: info.data.name });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{data.city}</Card.Title>
        <Card.Text>{data.temp} °F</Card.Text>
      </Card.Body>
      <Button> Fetch for data</Button>
    </Card>
  );
}

export default CardData;
