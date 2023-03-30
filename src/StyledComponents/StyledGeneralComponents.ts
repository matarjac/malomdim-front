import styled from 'styled-components';

interface IRemoveButton {
    isVisible: boolean;
}

export const RemoveButton = styled.button<IRemoveButton>`
    all:unset;
    cursor: pointer;
    width: 20px;
    height: 20px;
    text-align: center;
    margin-top: auto;
    position: absolute;
    right: 15px;
    scale: 120%;
    transform: translate(30%, -15%);
    z-index: 1;
    display: ${props => props.isVisible ? "inline-block" : "none"};
`
