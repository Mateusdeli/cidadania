import styled from 'styled-components'

export const SelectField = styled.select`
    border: 1px solid #DFE1E4;
    border-radius: 6px;
    width: ${({ width }) => width}px;
    height: 48px;
    background: url("images/arrowselect.png") 95.5% 50% no-repeat;
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
    padding-left: 5px;
    outline: 0;
`;

export const SelectColorField = styled.select`
    width: ${({ width }) => width}px;
    height: 81px;
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
    background: url("images/vectordown.png") 95.5% 50% no-repeat rgba(241, 241, 241, .25);
    border: none;
    font-weight: 600;
    font-size: 20px;
    padding-left: 32px;
    
`