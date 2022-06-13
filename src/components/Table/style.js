import styled from 'styled-components';

export const TableStyle = styled.table`
    text-transform: capitalize;
    width: 100%;
`;

export const TH = styled.th`
    border: 1px solid;
    padding: 10px;
    text-align: center;
`;

export const TD = styled.td`
    border: 2px solid;
    height: 100px;
    padding: 5px;
    text-align: center;
    width: 40px;
`;

export const TR = styled.tr`
    :hover {
        color: var(--textHover);
    }
`;

export const ListFilms = styled.li`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: max-content;
`;
