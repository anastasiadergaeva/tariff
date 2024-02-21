import './App.css';
import TariffItem from './components/TariffItem.jsx';
import data from './data.json';

function App() {
  const cardItem = data.map(item =>
    <TariffItem
      name={item.name}
      price={item.price}
      megabit={item.megabit}
      trafficvolume={item.trafficvolume}
    />
  )
  return (
    <main className='main'>{cardItem}</main>
  );
}

export default App;
