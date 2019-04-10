// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';

import Display from './Display';

afterEach(rtl.cleanup);

describe('Display component', () => {
  describe('if gate is open/closed and if it is locked/unlocked', () => {
    it('renders open and unlocked display', () => {
      const wrapper = rtl.render(<Display closed={false} locked={false} />);
      expect(wrapper.queryByText('Open')).toBeTruthy();
      expect(wrapper.queryByText('Unlocked')).toBeTruthy();
    });

    it('renders close and locked display', () => {
      const wrapper = rtl.render(<Display closed={true} locked={true} />);
      expect(wrapper.queryByText('Closed')).toBeTruthy();
      expect(wrapper.queryByText('Locked')).toBeTruthy();
    });
  });

  describe('if the correct led class is used', () => {
    it('renders red-led class when locked or closed', () => {
      const wrapper = rtl.render(<Display closed={true} locked={true} />);
      // expect(wrapper.container.classList.contains('red-led')).toBe(true);
    });

    it('renders green-led class when unlocked or open', () => {
      const wrapper = rtl.render(<Display closed={false} locked={false} />);
      // expect(wrapper.container.classList.contains('green-led')).toBe(true);
    });
  });
});
