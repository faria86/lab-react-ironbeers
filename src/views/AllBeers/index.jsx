import React, { Component } from 'react';

import SingleBeerForList from '../../components/SingleBeerForList';
import { listAllBeers } from '../../Services/beers-api';

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      AllBeers: [],
    };
  }

  componentDidMount() {
    listAllBeers()
      .then((response) => console.log(response))
      .catch((reject) => console.log(reject));
  }

  render() {
    return (
      <div>
        <h1>List of All Beers</h1>
        <SingleBeerForList />
      </div>
    );
  }
}

export default AllBeers;
