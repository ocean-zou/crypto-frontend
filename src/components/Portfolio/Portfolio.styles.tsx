import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  padding: 4rem 1.6rem;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  width: 50%;
  padding:2rem;
  h2{
    color:${({ theme }) => theme.colors.fontColor};
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.25rem;
    padding-bottom: 1rem;
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  span{
    color:${({ theme }) => theme.colors.secondaryFontColor};
    font-family: Inter;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.07rem;
    @media screen and (max-width: 1024px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
      /* font-size: 0.4rem; */
      display: none;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  padding:2rem;
`;
