import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
var startCase = require("lodash.startcase");

function CardData() {
  const [data, setData] = useState({
    temp: "",
    city: "",
    idCon: "",
    desc: "",
  });

  useEffect(() => {
    dataInfo();
  }, []);

  const dataInfo = async () => {
    try {
      const info = await axios.get("http://localhost:2000/weather");

      setData({
        temp: info.data.main.temp,
        city: info.data.name,
        idCon: info.data.weather[0].icon,
        desc: startCase(info.data.weather[0].description),
      });
    } catch (e) {
      console.log(e);
      setData({
        temp: "",
        city: "",
        idCon: "",
        desc: "Sorry, could not fetch data",
      });
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="bottom"
        src={`http://openweathermap.org/img/wn/${data.idCon}.png`}
        style={{ width: "50px" }}
      />
      <Card.Body>
        <Card.Title>{data.city}</Card.Title>
        <Card.Text>{data.temp} °F</Card.Text>
        <Card.Text>{data.desc} </Card.Text>
      </Card.Body>
      <Button onClick={dataInfo}> Fetch for data</Button>
    </Card>
  );
}

export default CardData;
