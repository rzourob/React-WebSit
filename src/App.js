import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, container } from 'react-bootstrap';
import person from'./components/data/data'
import DatesCount from './components/appointments/DatesCount';
import DatesList from './components/appointments/DatesList';
import DatesAction from './components/appointments/DatesAction';

function App() {

const [personData ,setPersonData] = useState(person)

const onDelete =()=>{
  setPersonData([])
}

const onViewData =()=>{
  setPersonData(person)
}
  return (
    <header className="App-header">
      <div className="container">

        <DatesCount person={personData}/>

        <DatesList person={personData}/>

        <DatesAction DeleteData={onDelete} onViewData={onViewData}/>

      </div>

    </header>
  );
}

export default App;
