// import logo from './logo.svg';
import './App.css';
import MyComp from './Mycomp';
import MyFun from './MyFun';
import GreetingProps from './GreetingProps';
import Button from './Button';
import Counter from './Counter';
import FunCounter from './FunCounter';
import OnChange from './OnChange';
import TilesList from './TilesList';
import Timer from './Timer';
import Card from './Card';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Location from './Location';
import AddReview from './AddReview';

// import AddingTile from '../AddingTile';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Welcome to React</h1>
    //     <p>React is good!</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <NavBar/>
      <Routes>
      <Route path='/Home' element={<Home /> }/>
      <Route path='/Location' element={
      <>
      <AddReview />
      <Location />
       </>}/>

        <Route path='/Tiles' element={<TilesList /> }/>
        <Route path='/Profile' element={<Profile /> }/>
        <Route path='/Contact' element={<Contact /> }>
          <Route path='Fun' element={<MyFun />}/>
          <Route path='FunCounter' element={<FunCounter />}/>
          
        </Route>
        <Route path='/' element={<Login /> }/>

      
      </Routes>
      {/* <MyComp />
      <MyFun />
      
       <GreetingProps name = "Jimmy"/>
       <GreetingProps name = "Josh"/>
       <GreetingProps name = "Jack"/>
       <Button />
       <Counter counter="1"/>
       <Counter  counter="5"/>
       <Counter  counter="10"/>
       <FunCounter/>
       <OnChange />*/}
      
       
       {/* <Timer /> */}
       {/* <Card /> */}
    </div>
  );
}

export default App;
