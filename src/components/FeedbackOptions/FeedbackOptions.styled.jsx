import styled from 'styled-components';

export const ButtonList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const ButtonItem = styled.li``;
export const RatingButton = styled.button`
  border-radius: 4px;
  padding: 6px 22px;
  text-align: center;
  color: #e67976;
  background-color: #e5e5e5;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  border: none;
  cursor: pointer;
  &:first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;