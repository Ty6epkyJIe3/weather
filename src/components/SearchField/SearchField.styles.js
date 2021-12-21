import styled from "styled-components";

export const InputStyled = styled.input`
  width: 40%;
  margin-left: 30%;
  margin-top: 10px;
  padding: 12px 0;
  font-size: 1rem;
  border: 0px solid;
  border-radius: 20px;
  text-align: center;
  font-family: 'Merriweather', serif;
  font-style: italic;
  box-shadow: 0px 5px 14px -2px rgba(34, 60, 80, 0.26);
  outline: transparent;
  margin-bottom: 15px;
`;

export const ButtonStyled = styled.button`
  padding: 12px 20px;
  border: 0px solid;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 5px 14px -2px rgba(34, 60, 80, 0.26);
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    background-color: #BDBDBD;
  }
`;