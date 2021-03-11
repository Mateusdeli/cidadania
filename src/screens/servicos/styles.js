import styled from 'styled-components'

const ContentWrapper = styled.div`
    width: 100%;
`;

ContentWrapper.Title = styled.h1`
    color: ${({ theme }) => theme.colors.secondary};
    padding: ${({ theme }) => theme.spacing[2]}px 0;
    text-align: center;
`;

ContentWrapper.Content = styled.p`
    color: #000000;
`;

export default ContentWrapper