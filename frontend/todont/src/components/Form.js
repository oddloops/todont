import React, { useState } from "react";

// Form component
function Form(props) {
  // States
  const [name, setName] = useState("");

  // submit event
  function handleSubmit(event) {
    event.preventDefault();
    if (name) {
      props.addTask(name);
    }
    setName("");
  }

  // change event
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
