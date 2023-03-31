import styled from "styled-components";

export const AddSubTopicButton = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid #66db9c;
  border-radius: 6px;
  width: 40%;
  color: #66db9c;
  text-align: center;
  height: 25px;
`;
export const MaterialAddingList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 250px;
  gap: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StudentEmailInput = styled.div`
  display: flex;
  gap: 20px;
`;
