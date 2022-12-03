import styled from 'styled-components';

export const Wrap = styled.div `
    display: flex;
    margin-bottom: 20px;

    border: 1px solid green;
    padding: 20px;
`;

export const Feedback = styled.p `
    :not(:last-child) {
        margin-right: 30px;
    }


`;

export const Total = styled.p `
   margin-bottom: 10px;
`;