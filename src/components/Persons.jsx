import React from "react";
import { useState } from "react";
import { Person } from "./Person";

export const Persons = () => {
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
    <div>
      <h2>IT Team</h2>
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-row">
          {persons.map((person) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                role={person.role}
                img={person.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
