import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

import { cities } from "../../api";

import "./Cities.css";

export class Cities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      cities: [],
    };
  }

  render() {
    const { loading, cities } = this.state;
    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          cities.map((city, index) => this.cardCity(city, index))
        )}
      </>
    );
  }

  componentDidMount() {
    this.loadCities();
  }

  loadCities = async () => {
    cities().then((cities) => this.setState({ cities, loading: false }));
  };

  cardCity = (cityObj, index) => {
    const { city } = cityObj;
    console.log("city", { city });
    return (
      <Card className="card" key={index}>
        <Card.Body>
          <Card.Title>
            <h3>{city}</h3>
          </Card.Title>
          <Button href={"/city?city=" + city} variant="warning" size="lg" block>
            view
          </Button>
        </Card.Body>
      </Card>
    );
  };
}
