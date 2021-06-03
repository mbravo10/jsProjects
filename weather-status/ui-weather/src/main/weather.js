import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { usePosition } from "../hooks/usePosition";
var startCase = require("lodash.startcase");

function CardData() {
  const [data, setData] = useState({
    temp: "",
    location: "",
    cityT: "",
    idCon: "",
    desc: "",
  });
  const { lat, long, error } = usePosition();

  const onChange = (e) => {
    setData({ ...data, cityT: e.target.value });
  };

  const currentLocation = async () => {
    try {
      const info = await axios.get(
        "http://localhost:2000/weather/" + lat + "/" + long
      );

      setData({
        temp: info.data.main.temp,
        location: info.data.name,
        idCon: info.data.weather[0].icon,
        desc: startCase(info.data.weather[0].description),
      });
    } catch {
      setData({
        temp: "0",
        location: "",
        idCon: "",
        desc: { error },
      });
    }
  };

  const cityInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2000/weather/" + data.cityT
      );
      setData({
        temp: res.data.main.temp,
        location: res.data.name,
        idCon: res.data.weather[0].icon,
        desc: startCase(res.data.weather[0].description),
      });
    } catch (e) {
      console.log(e);
      setData({
        temp: "0",
        location: "",
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
        <Card.Title>{data.location}</Card.Title>
        <Card.Text>{data.temp} °F</Card.Text>
        <Card.Text>{data.desc} </Card.Text>
      </Card.Body>
      <InputGroup onChange={onChange} className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={cityInfo}>
            Get Info
          </Button>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>
      <Button onClick={currentLocation}> Get Local Weather</Button>
    </Card>
  );
}

export default CardData;
