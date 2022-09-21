import styled from "styled-components";

function DefaultButton({ text, style, onClick }) {
  return (
    <Button style={style} onClick={onClick}>
      {text}
    </Button>
  );
}

export default DefaultButton;
const Button = styled.button`
  background: #fff;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;
