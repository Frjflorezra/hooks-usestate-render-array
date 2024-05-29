import React from "react";
import { Person } from "./Person";
import { useState } from "react";

export const Persons = ({ persons, setPersons }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedPerson, setEditedPerson] = useState({
    name: "",
    role: "",
    img: "",
  });
  const [IsEditing, setIsEditing] = useState(false);
  const [personToDelete, setPersonToDelete] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // metodo para editar
  const handleEdit = (id) => {
    // se establece el ID de la persona que queremos editar
    setEditingId(id);
    // activamos el estado de edicion
    setIsEditing(true);
    // buscamos la persona a editar por medio del id y la asigna a persontoedit
    const personToEdit = persons.find((person) => person.id === id);
    // establecemos los datos de la persona a editar
    setEditedPerson({ ...personToEdit });
  };
  // metodo para guardar cambios
  const handleSave = (e) => {
    // actualizar el array de persons con los cambios del formulario
    setPersons(
      persons.map((person) => (person.id === editingId ? editedPerson : person))
    );
    // resetear el id de la persona que ya se edito
    setEditingId(null);
    // resetear los datos de la persona editada
    setEditedPerson({ name: "", role: "", img: "" });
    setIsEditing(false);
  };
  //  metodo para eliminar una tarjeta
  const handleDelete = (id) => {
    setPersonToDelete(id);
  };
  const cancelDelete = () => { 
    setPersonToDelete(null)
   }
  const confirmDelete = (e) => { 

    setPersons(persons.filter(person => person.id !== personToDelete))
    setPersonToDelete(null)
   }

  const handleCreate = () => {
    setPersons([...persons, {id: persons.length + 1, ...editedPerson}])
    setEditedPerson({
      name: "",
      role: "",
      img: "",
    })
  }

  return (
    <div>
      <h2>IT Team</h2>
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
          {persons.map((person) => {
            return (
              <div>
                <Person
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  role={person.role}
                  img={person.img}
                  handleEdit={() => handleEdit(person.id)}
                  handleDelete={handleDelete}
                />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* renderiza el formulario para crear o editar */}
      <div className="d-flex flex-row mt-4">
        <div className="col">
          <h2>{IsEditing ? 'Modificar Datos': 'Datos de la Nueva persona'}</h2>
          <input
            className="form-control mb-2"
            type="text"
            name="name"
            value={editedPerson.name}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            className="form-control mb-2"
            type="text"
            name="role"
            value={editedPerson.role}
            onChange={handleChange}
            placeholder="Rol"
          />
          <input
            className="form-control mb-2"
            type="text"
            name="img"
            value={editedPerson.img}
            onChange={handleChange}
            placeholder="URL de la imagen"
          />
          <div>
            <button className="btn btn-primary" onClick={IsEditing ? handleSave : handleCreate}>
              {IsEditing ? 'guardar' : 'crear'}
            </button>
          </div>
        </div>
      </div>
      {/* modal de confirmacion */}
      <div id="deleteModal" className="modal fade" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Confirmar Eliminación</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={cancelDelete}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Estas seguro de eliminar a 
                {persons.find((person) => person.id === personToDelete)?.name}
              </p>
            </div>
            <div className="modal-footer"></div>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={cancelDelete}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={confirmDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
