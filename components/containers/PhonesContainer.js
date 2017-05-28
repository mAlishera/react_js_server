import React from 'react';

import PhonesList from '../ui/PhonesList';

const phones = [
  {
    name: 'BG',
    phone: '+7 777'
  },
  {
    name: 'DD',
    phone: '+1 111'
  },
];

class PhonesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { phones };
  }

  render() {
    const { phones } = this.state;
    return React.createElement(PhonesList, { phones });
  }
}

export default PhonesContainer;
