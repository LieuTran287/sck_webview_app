import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';


Enzyme.configure({ adapter: new Adapter() });

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/stack', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
      replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    }
  }
});
