import styled from "styled-components";

function CheckBox({ style, checked }) {
  return <InputCheck style={style} type="checkbox" checked={checked} />;
}

export default CheckBox;
const InputCheck = styled.input`
  background: #fff;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  &:checked + p {
    color: #ddd;
    text-decoration: line-through;
  }
`;
