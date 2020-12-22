import React, { useRef } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";

function Person(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function handleAddPerson() {
    let name = nameInputRef.current.value;
    let age = ageInputRef.current.value;
    props.addPerson({ id: nanoid(), name, age });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  return (
    <div>
      <h1>Add Person, above component total is: {props.count}</h1>
      <input ref={nameInputRef} type="text" placeholder="name" />
      <input ref={ageInputRef} type="text" placeholder="age" />
      <button onClick={handleAddPerson}>Add</button>
      <ul>
        {props.people.map((person) => (
          <li key={person.id}>
            {person.name} is {person.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({ people: state.people, count: state.count }),
  {
    addPerson,
  }
)(Person);
