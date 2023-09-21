import './App.css';
import { WeatherContextProvider } from './GlobalContext';
import Main from './components/Main/Main';
import Side from './components/side-display/Side';



function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <Main />
        <Side />
     </WeatherContextProvider>
    </div>
    
  );
}

export default App;
