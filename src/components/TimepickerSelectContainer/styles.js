import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    max-height: 300px;

    border: 1px solid #333;
    grid-template-colums: repeat(3, 60px);
    grid-template-rows: 200px auto;
`