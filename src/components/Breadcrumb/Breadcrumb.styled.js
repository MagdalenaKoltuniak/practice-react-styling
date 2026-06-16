import styled from "styled-components";

const BreadcrumbNav = styled.nav`
    font-size: 16px;
    line-height: 1.5;
    color: #212529;
    text-align: left;
`
const BreadcrumbList = styled.ol`
    display: flex;
    list-style: none;
    padding: 12px 16px;
    margin-bottom: 16px;
    background-color: #e9ecef;
    border-radius: 4px;
`
const BreadcrumbListItem = styled.li`
    & + &::before {
        content: "/";
        padding: 0 8px;
        color: #6c757d;
    }

    a {
        text-decoration: none;
        color: #007bff;
        background-color: transparent;
    }

    &.active {
        color: #6c757d;
    }
`

export {BreadcrumbNav, BreadcrumbList, BreadcrumbListItem}