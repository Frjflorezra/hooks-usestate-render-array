import './App.css';
import { Persons } from './components/Persons';
import { useState } from 'react';
function App() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "francisco florez",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 2,
      name: "Catalina",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 3,
      name: "Juan perez",
      role: "backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
  ]);
  return (
    <div className='App'>
      <div className='container'>
        <Persons persons = {persons} setPersons ={setPersons} />
      </div>
    </div>
  );
}

export default App;
