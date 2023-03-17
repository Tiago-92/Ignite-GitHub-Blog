import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 54rem;
  height: 13.25rem;

  margin-top: -6.25rem;

  padding-top: 2rem;
  padding-left: 2.5rem;

  display: flex;
  gap: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  .avatar {
    width: 9.25rem;
    height: 9.25rem;
  }

  .profile {
    width: 38.25rem;

    .name {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.95rem;
        color: ${(props) => props.theme['base-title']};
      }

      button {
        background: transparent;
        border: none;

        display: flex;
        gap: 0.5rem;
        align-items: center;

        font-family: 'Coda', cursive;
        font-size: 0.75rem;
        color: ${(props) => props.theme['base-blue']};

        cursor: pointer;

        img {
          width: 0.69rem;
          height: 0.69rem;
          color: ${(props) => props.theme['base-blue']};
        }
      }
    }

    .description {
      margin-top: 0.5rem;

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    .links {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      margin-top: 1.5rem;

      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};

      span {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      img {
        width: 1rem;
        height: 1rem;

        color: red;
      }
    }
  }
`
