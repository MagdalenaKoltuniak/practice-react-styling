import styled from "styled-components";

const TabsNav = styled.nav`
    border-bottom: 1px solid #dee2e6;
`;

const TabsList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`

const TabItem = styled.li`
    margin-bottom: -1px;
`

const TabButton = styled.button`
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    padding: 8px 16px;
    cursor: pointer;
    color: #007bff;
    font-size: 16px;
    background-color: transparent;
    transition: border-color 0.3s;

    &:hover {
        border-color: #e9ecef #e9ecef #dee2e6;
    }

    &.active,
    &.active:hover {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }

    &:disabled,
    &.disabled:hover {
        color: #6c757d;
        background-color: transparent;
        border-color: transparent;
        cursor: default;
        pointer-events: none;
    }

    &:focus {
        outline: 0.2px solid #dee2e6;
    }
`

export {TabsNav, TabsList, TabItem, TabButton}