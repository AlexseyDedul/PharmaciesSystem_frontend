import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListPharmaciesComponent from './components/pharmacies/ListPharmaciesComponent';

function App() {
  return (
    <div className="container">
      <ListPharmaciesComponent />
    </div>
  );
}

export default App;
