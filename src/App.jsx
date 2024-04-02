import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MenuPage from './Pages/MenuPage';
import bg from './assets/img/bg.png';
import FoodPage from './Pages/FoodPage';
import DrinkPage from './Pages/DrinkPage';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [foodVisible, setFoodVisible] = useState(false);
  const [drinkVisible, setDrinkVisible] = useState(false);

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  }

  const toggleFoodVisible = () => {
    setFoodVisible(!foodVisible);
  }

  const toggleDrinkVisible = () => {
    setDrinkVisible(!drinkVisible);
  }

  return (
    <div>
      <Navbar onMenuClick={toggleMenuVisible} />
      <img src={bg} alt="Bg" className='fixed'/>
      {menuVisible && <MenuPage onFoodClick={toggleFoodVisible} onDrinkClick={toggleDrinkVisible}/>}
      {foodVisible && <FoodPage />}
      {drinkVisible && <DrinkPage />}
    </div>
  );
}

export default App;
