import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  padding-top: 20px;
`;

export const ContentContainer = styled.div`
  margin: 20px;
  border-radius: 10px;
  padding: 30px;
  background: #fff;
  color: #312e38;
  flex: 1;
  height: auto;
  display: inline-table;
`;

export const Calculator = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    div {
      display: flex;
      flex-direction: row;

      input + * {
        margin-left: 10px;
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
  padding: 15px;
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
  padding-left: 15px;
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
  margin-top: 40px;

  div {
    margin-top: 3px;
  }
`;

export const Result = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
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
