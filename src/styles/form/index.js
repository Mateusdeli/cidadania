import styled from 'styled-components'

export const Form = styled.form`
    position: absolute;
   left: ${({ left }) => left};
   top: ${({ top }) => top};
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 24px;
`;

Form.Content = styled.div`
    width: 100%;
    height: 100%;
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-left: ${({ paddingLeft }) => paddingLeft};
    padding-right: ${({ paddingRight }) => paddingRight};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
`;

Form.Label = styled.label`
    font-weight: bold; 
    font-size: 16px;
    line-height: 24px;
    font-family: "Assistant" sans-serif;
    font-weight: 600;
`;

Form.Textarea = styled.textarea`
    border: 1px solid #DFE1E4;
    border-radius: 6px;
    width: ${({ width }) => width ? width : '100%'}px;
    height: ${({ height }) => height ? height : 48}px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    resize: none;
`;

Form.Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 8px 0;
`;

Form.GroupInline = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 8px 0;
`;