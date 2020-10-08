import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Testing on GifGridItem', () => {
  test('should render gif grid item', () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  })
  
})
