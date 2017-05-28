import React, { DOM } from 'react';

import _ from 'lodash';

const TextBox = ({ string }) => (
  DOM.span(null, string || 'default text')
);

export default TextBox;
