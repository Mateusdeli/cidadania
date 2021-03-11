import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    height: auto;
    margin: 143px 0px 116px 0px;
    width: 1140px;
    left: 390px;
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    text-align: center;
`;

Content.Info = styled(Content)`
    width: 853px;
`;

Content.Servicos = styled.div`
    padding-top: 65px;
    display: flex;
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
    text-align: left;
    width: 561px;
    margin-right: 116px;
`;