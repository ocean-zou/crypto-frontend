import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.containerColor};
`
export const NavigationContainer=styled.nav`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  font-family: var(--font-mono);
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.divider}; */
`
export const TabContainer=styled.div`
  display: inherit;
  justify-content: center;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  font-family: var(--font-mono);
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.divider}; */
`
export const BodyContainer=styled.div`
  width: 100%;
  max-width: 1100px;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 ;

`