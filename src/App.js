import { useState, useRef } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import ToDoList from "./components/List";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, text: "운동하기", updateState: false },
    { id: 2, text: "영어 공부하기", updateState: false },
  ]);
  const [toDo, setToDo] = useState("");
  const [updateText, setUpdateText] = useState("");
  const nextId = useRef("3");

  const handleChangeInput = ({ target }) => {
    setToDo(target.value);
  };
  const handleClickInsertBtn = () => {
    const toDoItem = {
      id: nextId.current++,
      text: toDo,
      updateState: false,
    };
    if (toDo === "") {
      alert("할 일을 입력해주세요!");
    } else {
      setToDoList([...toDoList, toDoItem]);
      setToDo("");
    }
  };
  const handleClickDeleteBtn = (toDoId) => {
    setToDoList(toDoList.filter((item) => item.id !== toDoId));
  };
  const handleClickUpdateBtn = (toDoId, text) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === toDoId ? { ...todo, updateState: true } : todo
      )
    );
    setUpdateText(text);
  };
  const handleClickSaveBtn = (toDoId) => {
    if (updateText == "") {
      alert("할 일을 입력해주세요.");
    } else {
      setToDoList(
        toDoList.map((todo) =>
          todo.id === toDoId
            ? { ...todo, text: updateText, updateState: false }
            : todo
        )
      );
    }
  };
  const onChange = ({ target }) => {
    setUpdateText(target.value);
  };

  return (
    <Container>
      <Title>TODOLIST</Title>
      <InputText type="text" onChange={handleChangeInput} value={toDo} />
      <Button
        text={"추가"}
        style={{ marginLeft: "10px", border: "1px solid blue", color: "blue" }}
        onClick={handleClickInsertBtn}
      />
      {toDoList?.map((item, index) => {
        return (
          <ToDoList
            text={item.text}
            key={index}
            id={item.id}
            handleClickDeleteBtn={handleClickDeleteBtn}
            handleClickUpdateBtn={handleClickUpdateBtn}
            handleClickSaveBtn={handleClickSaveBtn}
            state={item.updateState}
            value={updateText}
            onChange={onChange}
          />
        );
      })}
    </Container>
  );
}

export default App;
const Container = styled.div`
  max-width: 600px;
  min-height: 500px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  background: #f5f5f5;
`;
const Title = styled.p`
  font-size: 20px;
`;
const InputText = styled.input`
  height: 20px;
`;
