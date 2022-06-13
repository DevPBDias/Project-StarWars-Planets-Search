import styled from 'styled-components';

export const ButtonStyle = styled.button`
    border-radius: 50%;
    height: 60px;
    margin: 10px;
    padding: 3px;
    text-transform: uppercase;
    width: 60px;
    :hover {
        border: 2px solid var(--textHover);
    }
`;

export const SelectStyle = styled.select`
    background-color: white;
    margin: 10px;
    padding: 3px;
    text-transform: uppercase;
    :hover {
        border: 2px solid var(--textHover);
    }
`;

export const SpanStyle = styled.span`
    margin: 10px;
    padding: 3px;
    text-transform: capitalize;
    :hover {
        border: 2px solid var(--textHover);
    }
`;

export const FormsStyle = styled.main`
    margin: 0 auto;
    margin-bottom: 30px;
    width: fit-content;    
    :hover {
    margin: 0 auto;
    margin-bottom: 30px;
    width: fit-content;
    }
`;

export const InputStyle = styled.input`
    background-color: white;
    margin: 10px;
    padding: 3px;
    text-align: center;
`;

export const OptionStyle = styled.option`
    background-color: white;
`;

export const LabelStyle = styled.label`
    margin-left: 20px;
    :hover {
    color: var(--textHover);
    }
`;

export const PlanetFilter = styled.div`
    align-items: center;
    display: flex;
    font-size: 20px;
    justify-content: center;
    padding: 10px;
`;

export const OptionsFilter = styled.div`
    align-items: center;
    display: flex;
    font-size: larger;
    justify-content: space-around;
    margin: 0 auto;
    padding: 10px;
`;

export const SelectFilter = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    font-size: 20px;
    justify-content: space-around;
    margin: 0 auto;
    padding: 10px;
`;

export const ButtonFilter = styled.div`
    align-items: center;
    display: flex;
    font-size: larger;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
`;
