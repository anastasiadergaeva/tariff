import TariffItem from './components/TariffItem.jsx';
import data from './data.json';

function App() {
  function getColor(index) {
    switch (index) {
      case 0:
        return 'blue';
      case 1:
        return 'green';
      case 2:
        return 'red';
      case 3:
        return 'grey';
      default:
        return 'purple';
    }
  }
  return (
    <main className='main'>
      {
        data.map((item, index) => {
          return <TariffItem key={item.id} {...item} color={getColor(index)} />;
        })
      }
    </main>
  );
}

export default App;
