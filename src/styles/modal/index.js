import styled from 'styled-components'

const Modal = styled.div`
   position: absolute;
   left: ${({ left }) => left};
   top: ${({ top }) => top};
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 24px;
`;

Modal.Content = styled.div`
    width: 100%;
    height: 100%;
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-left: ${({ paddingLeft }) => paddingLeft};
    padding-right: ${({ paddingRight }) => paddingRight};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
`;

export default Modal;
