import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

import { getQueryParamFromLocation } from "../../utils/url";
import { customersByCity } from "../../api";

export class Customers extends Component {
  constructor(props) {
    super(props);

    const { city } = getQueryParamFromLocation(this.props.location.search);

    this.state = {
      loading: true,
      title: city,
      customers: [],
      city,
    };
  }

  componentDidMount() {
    this.loadCustomers();
  }

  render() {
    const { loading, title, customers } = this.state;
    console.log('customers', customers);

    return (
      <>
        <h2>{title}</h2>
        {
          loading ?
            <p>Loading...</p> :
            customers.map((customer, index) => this.cardCustomer(customer, index))
        }
      </>
    );
  }

  loadCustomers = async () => {
    const { city } = this.state;
    customersByCity({ city })
      .then((customers) => this.setState({ customers, loading: false, }));
  };

  cardCustomer = (customer, index) => {
    const { id, first_name, last_name, } = customer;

    return (
      <Card className="card" key={index}>
        <Card.Body>
          <Card.Title>
            <h3>{first_name + " " + last_name}</h3>
          </Card.Title>
          <Button href={"/customer?id=" + id} variant="warning" size="lg" block>
            view
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
