import React, { Component } from "react";

import { getQueryParamFromLocation } from "../../utils/url";
import { customer } from "../../api";

export class Customer extends Component {
  constructor(props) {
    super(props);

    const { id } = getQueryParamFromLocation(props.location.search);

    this.state = {
      loading: true,
      customer: {},
      id,
    };
  }

  componentDidMount() {
    this.loadCustomer();
  }

  render() {
    const { customer, loading } = this.state;
    return (
      <>
        {
          loading ? 
            <p>Loading...</p> : 
            this.viewCustomer(customer)
        }
      </>
    );
  }

  loadCustomer = async () => {
    const { id } = this.state;
    customer({ id }).then(({ customer }) =>
      this.setState({
        customer,
        loading: false,
      })
    );
  };

  viewCustomer = (customer) => {
    return (
      <>
        <h2>{customer.first_name + " " + customer.last_name}</h2>
        <p>E-mail: {customer.email}</p>
        <p>Gender: {customer.gender}</p>
        <p>Company: {customer.company}</p>
        <p>City: {customer.city}</p>
        <p>Title: {customer.title}</p>
      </>
    );
  };
}
