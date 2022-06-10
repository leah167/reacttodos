import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
      </header>
    </div>
  );
}

function ToDoComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("low");
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <h1
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontFamily: "fantasy",
        }}
      >
        To-Do List
      </h1>
      <input
        placeholder="Title"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <input
        placeholder="Description"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        type="text"
        value={description}
        onChange={(e) => {
          const newDescription = e.target.value;
          setDescription(newDescription);
        }}
      ></input>
      <select
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        onChange={(e) => {
          const newImportance = e.target.value;
          setImportance(newImportance);
        }}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "purple",
          fontSize: "16px",
          fontFamily: "fantasy",
        }}
        onClick={(e) => {
          const newToDo = { title, description, importance };
          setToDoList([...toDoList, newToDo]);
          setTitle("");
          setDescription("");
        }}
      >
        Submit
      </button>
      <hr />
      <div>
        {toDoList.map((element) => {
          return (
            <div>
              <p
                style={{
                  margin: "10px",
                  padding: "1% ",
                  textAlign: "center",
                  color: "purple",
                  fontSize: "16px",
                  fontFamily: "fantasy",
                }}
              >
                {element.title}
              </p>
              <p
                style={{
                  margin: "10px",
                  padding: "1% ",
                  textAlign: "center",
                  color: "purple",
                  fontSize: "16px",
                  fontFamily: "fantasy",
                }}
              >
                Description: {element.description}
              </p>
              <p
                style={{
                  margin: "10px",
                  padding: "1% ",
                  textAlign: "center",
                  color: "purple",
                  fontSize: "16px",
                  fontFamily: "fantasy",
                }}
              >
                Importance: {element.importance}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
