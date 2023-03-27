import styled from "styled-components";

interface IModalContentSize {
    width: number;
    height: number;
}

export const ModalOverLay = styled.div`
position: absolute;
top: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(19, 18, 52, 0.57);
    width: '100vw';
    height: '100vh';
    z-index: 1;
`

export const ModalBoxContent = styled.div<IModalContentSize>`
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #2D2B52;
    display: flex;
    flex-direction: column;
    padding: 30px 50px 60px;
    border-radius: 18px;
    gap: 20px;
    z-index: 2;
    box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.2);
`

export const StyledTextArea = styled.textarea`
    all:unset;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
    align-items: center;
`

export const StyledDurationButtons = styled.button`
    all:unset;
    cursor: pointer;
    height: 25px;
    align-content: center;
    align-items: center;
    text-align: center;
    width: 25px;
    padding: 5px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
`

export const StyledAddButton = styled.button`
    all:unset;
    cursor: pointer;
    border-radius: 6px;
    height: 44px;
    text-align: center;
    color: white;
    background-color: rgba(132, 113, 223, 1);
    padding: 7px;
    font-size: 13px;
    font-weight: 400;
`