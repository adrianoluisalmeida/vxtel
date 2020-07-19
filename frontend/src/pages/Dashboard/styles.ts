import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  border-radius: 10px;
  padding: 30px;
  background: #fff;
  color: #312e38;
  height: auto;

  @media (min-width: 1024px) {
    display: inline-table;
    margin: 20px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    table {
      order: 2;
    }

    div {
      order: 1;
    }
  }
`;

export const Calculator = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    div {
      display: flex;

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }

      input + * {
        margin-left: 10px;
      }

      @media (max-width: 456px) {
        flex-direction: column;

        input + * {
          margin-left: 0px;
        }
      }
    }
  }
`;

export const Plans = styled.table`
  width: 100%;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 10px;
  height: 56px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 10px;

  &::placeholder {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    color: #312e38;
  }
`;

export const Select = styled.select`
  padding-left: 10px;
  width: 100%;
  border-radius: 10px;
  height: 56px;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  color: #312e38;
`;

export const ValidationsMessages = styled.div`
  margin-top: 20px;
  div {
    margin-top: 5px;
  }
`;

export const Result = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 50px;

  @media (max-width: 1024px) {
    margin-top: 0px;
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    strong {
      font-size: 16px;
    }

    font-size: 24px;
  }
`;
