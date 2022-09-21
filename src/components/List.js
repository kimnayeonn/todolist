import CheckBox from "./Checkbox";
import DefaultButton from "./Button";
import styled from "styled-components";

function ToDoList({
  text,
  style,
  handleClickDeleteBtn,
  handleClickUpdateBtn,
  handleClickSaveBtn,
  onChange,
  id,
  state,
  value,
}) {
  return (
    <Container>
      <CheckBox />
      {!state ? (
        <Item style={style}>{text}</Item>
      ) : (
        <Input value={value} onChange={onChange} />
      )}

      <DefaultButton
        text={"삭제"}
        style={{ border: "1px solid red", color: "red", marginLeft: "10px" }}
        onClick={() => handleClickDeleteBtn(id)}
      />
      {!state ? (
        <DefaultButton
          text={"수정"}
          style={{
            border: "1px solid gray",
            color: "gray",
            marginLeft: "10px",
          }}
          onClick={() => handleClickUpdateBtn(id, text)}
        />
      ) : (
        <DefaultButton
          text={"저장"}
          style={{
            border: "1px solid gray",
            color: "gray",
            marginLeft: "10px",
          }}
          onClick={() => handleClickSaveBtn(id)}
        />
      )}
    </Container>
  );
}

export default ToDoList;
const Item = styled.p``;
const Input = styled.input`
  height: 22px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 50px 50px;
  align-items: center;
  padding: 10px 0;
`;
