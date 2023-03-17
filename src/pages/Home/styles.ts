import styled from 'styled-components'
import coverImage from '../../assets/images/cover.png'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .post-container {
    width: 54rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    margin-top: 3rem;
  }
`

export const HeaderContainer = styled.header`
  background-image: url(${coverImage});
  background-size: cover;
  height: 18.5rem;
  width: 100%;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    margin-top: 4rem;

    font-family: 'Coda', cursive;
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-blue']};
  }
`

export const PostsSearchContainer = styled.section`
  width: 54rem;

  div {
    display: flex;
    justify-content: space-between;

    margin-top: 4.5rem;

    p {
      font-size: 1.12rem;
      font-weight: 700;
      line-height: 1.81rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.87rem;
      font-weight: 400;
      line-height: 1.37rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    height: 3.12rem;

    margin-top: 0.75rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};

    padding-left: 1rem;

    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.62rem;

    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.62rem;
      color: ${(props) => props.theme['base-label']};
    }

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme['base-blue']};
    }
  }
`
