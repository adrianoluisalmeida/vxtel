import React from 'react';

import { Container } from './styles';

interface ValidationProps {
  touched: boolean | void;
  errors: string | void;
}

const ValidationErrors: React.FC<ValidationProps> = ({ touched, errors }) => (
  <Container>{touched && errors ? <div>{errors}</div> : null}</Container>
);

export default ValidationErrors;
