import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #b1afb3;
  font-size: 16px;
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    background-color: #62566e;
  }
`;
