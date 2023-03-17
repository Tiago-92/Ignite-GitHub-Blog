import styled from 'styled-components'

export const PostContainer = styled.button`
  width: 26rem;
  height: 16.25rem;

  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;

  cursor: pointer;

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme['base-blue']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['base-blue']};
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      width: 15.62rem;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 2rem;
      color: ${(props) => props.theme['base-title']};
      text-align: left;
    }

    span {
      font-size: 0.87rem;
      font-weight: 400;
      line-height: 1.37rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.62rem;
    color: ${(props) => props.theme['base-text']};
  }
`
