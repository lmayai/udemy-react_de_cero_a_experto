import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Testing on <CounterApp />', () => {
  
  let wrapper = shallow(<CounterApp/>);

  beforeEach(() => {
    wrapper = shallow(<CounterApp/>);
  })

  test('should create the snapshot of <Counter App />', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  test('should show default value of 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>)
    const valueRendered = Number(wrapper.find('h2').text().trim());
    expect(value).toBe(valueRendered);
  })
  
  test('Should increment value when click plus button', () => {
    wrapper.find('button').at(0).simulate('click'); 
    const newValue = wrapper.find('h2').text().trim();
    expect(newValue).toBe('11');
  });

  test('should decrement value when click minus button', () => {
    wrapper.find('button').at(2).simulate('click');
    const newValue = wrapper.find('h2').text().trim();
    expect(newValue).toBe('9');
  })

  test('should reset value', () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value}/>)
    wrapper.find('button').at(0).simulate('click'); // Suma 1
    wrapper.find('button').at(0).simulate('click'); // Suma 1
    wrapper.find('button').at(1).simulate('click'); // Reset
    const newValue = wrapper.find('h2').text().trim();
    expect(newValue).toBe('105');
  })
  
  
})
