import styled from 'styled-components';

export const OptionList = styled.ul`
    display: flex;
    text-align: center;
    justify-content: start;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const OptionItem = styled.li`
    &:not(:last-child) {
        margin-right: 10px;
    }
`