import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Tests on FirstApp', () => {
  const wrapper = shallow(<CounterApp />);

  test('should display the "<CounterApp/>" component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display the initial value of 100', () => {
    const initialValue = 100;

    const wrapper = shallow(<CounterApp initialValue={initialValue} />);

    expect(wrapper.find('h2').text().trim()).toBe('100');
  });

  test('Must increase with the +1 button', () => {
    wrapper.find('#btnAdd').simulate('click');

    expect(wrapper.find('h2').text().trim()).toBe('11');
  });

  test('Must decrease with the -1 button', () => {
    wrapper.find('#btnSubstract').simulate('click');

    expect(wrapper.find('h2').text().trim()).toBe('10');
  });

  test('Must place the default value with the btnReset button', () => {
    const initialValue = 21;
    const wrapper = shallow(<CounterApp initialValue={initialValue} />);

    wrapper.find('#btnAdd').simulate('click');
    wrapper.find('#btnReset').simulate('click');

    expect(Number(wrapper.find('h2').text().trim())).toBe(initialValue);
  });
});
