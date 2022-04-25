import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';

describe('Tests on FirstApp', () => {
  test('should display the "<FirstApp/>" component correctly', () => {
    const greeting = 'Hola, soy Ironman';

    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should display subtitle from props', () => {
    const greeting = 'Hola, soy Ironman';
    const subtitle = 'Este es un subtitulo';

    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );

    expect(wrapper.find('p').text()).toBe(subtitle);
  });
});
