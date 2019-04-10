// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';

import Controls from './Controls';

afterEach(rtl.cleanup);

describe('Controls component', () => {
  it('renders Lock Gate and Close Gate buttons succesfully', () => {
    const wrapper = rtl.render(<Controls />);
    expect(wrapper.queryByText('Lock Gate')).toBeTruthy();
    expect(wrapper.queryByText('Close Gate')).toBeTruthy();
  });

  it('renders Open Gate and Unlock Gate buttons succesfully', () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(wrapper.queryByText('Open Gate')).toBeTruthy();
    expect(wrapper.queryByText('Unlock Gate')).toBeTruthy();
  });

  it('disables Lock Gate button if the gate is opened', () => {
    const wrapper = rtl.render(<Controls locked={false} closed={false} />);
    rtl.fireEvent.click(wrapper.queryByText('Lock Gate'));
    expect(wrapper.queryByText('Unlock Gate')).toBeFalsy();
  });

  it('disables Open Gate button if the gate is locked', () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />);
    rtl.fireEvent.click(wrapper.queryByText('Open Gate'));
    expect(wrapper.queryByText('Close Gate')).toBeFalsy();
  });
});
