import React from 'react';
import { create } from 'react-test-renderer';

import Message from '../Message';

describe('Message component', () => {
  it('should render without issues', () => {
    const component = create(<Message />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
