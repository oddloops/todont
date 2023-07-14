import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  // Code snippet given by Mozilla Web Docs
  
 const taskList = props.tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));


  return (
    <div className="todoapp stack-large">
      <h1>ToDon't</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <u1 role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </u1>
    </div>
  );
}

export default App;
