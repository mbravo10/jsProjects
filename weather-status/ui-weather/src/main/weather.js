import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
var startCase = require("lodash.startcase");

function CardData() {
  const [data, setData] = useState({
    temp: "",
    city: "",
    cityT: "",
    idCon: "",
    desc: "",
  });

  useEffect(() => {
    dataInfo();
  }, []);

  const onChange = (e) => {
    setData({ ...data, cityT: e.target.value });
  };

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

  const cityInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2000/weather/" + data.cityT
      );
      setData({
        temp: res.data.main.temp,
        city: res.data.name,
        idCon: res.data.weather[0].icon,
        desc: startCase(res.data.weather[0].description),
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
      <InputGroup onChange={onChange} className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={cityInfo}>
            Get Info
          </Button>
        </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>
      <Button onClick={dataInfo}> Fetch for data</Button>
    </Card>
  );
}

export default CardData;
