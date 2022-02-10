import styled from "styled-components";
import { UNITS_OF_TIME } from "../../constants/units";

export const Select = styled.div`
    grid-column: ${
        props => props.unitOfTime === UNITS_OF_TIME.HOUR ? 1 :
            props.unitOfTime === UNITS_OF_TIME.MINUTE ? 2 : 3
    }
`

export const List = styled.ul`
    list-style: none;
    height: 100%;
    overflow: auto;

    li {
        transition: all .2s;
    }

    li:hover {
        background: #ccc;
        cursor: pointer;
        color: #fff;
    }
`;
