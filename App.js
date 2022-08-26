import './src/config/firebase';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import MainEntry from './src/screens/MainEntry';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <MainEntry />
    </Provider>
  );
}
