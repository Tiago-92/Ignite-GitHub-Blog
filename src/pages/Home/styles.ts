import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    position: relative;
  }

  h1 {
    position: absolute;
    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    font-family: 'Coda', cursive;
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-blue']};

    img {
      width: 2.81rem;
      height: 2.5rem;
    }
  }
`
