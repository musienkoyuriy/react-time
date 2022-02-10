import styled from "styled-components";

export const Navbar = styled.div`
    grid-column: 1 / span 3;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;

    a {
        color: #1890ff;
        cursor: pointer;
    }
`;