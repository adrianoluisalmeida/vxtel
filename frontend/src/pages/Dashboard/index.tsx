import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import Header from '../../componets/Header';
import styled from 'styled-components';
import {
  Container,
  Content,
  Calculator,
  Plans,
  ContentContainer,
  Input,
  Select
} from './styles';

import { useFormik, Field } from 'formik';

import * as Yup from 'yup';

import api from '../../services/api';

import Button from '../../componets/Button';

import getValidationErrors from '../../util/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const [economically, setEconomically] = useState();
  const [noEconomically, setNoEconomically] = useState();

  const formik = useFormik({
    initialValues: {
      origin: '',
      destiny: '',
      minutes: '',
      plan_id: ''
    },
    onSubmit: values => {
      api.post('/calls', values).then(response  => {
        const { more_economically, no_more_economically } = response.data;

        setEconomically(more_economically);
        setNoEconomically(no_more_economically);
      });
    },
  });

  return (
    <Container>
      <Header />
      <Content>

        <ContentContainer>
          <Calculator>
            <h2>Descubra o valor da sua ligação</h2>

            <form onSubmit={formik.handleSubmit}>

              <Input
                id="origin"
                name="origin"
                placeholder="DDD"
                onChange={formik.handleChange}
                value={formik.values.origin}
              />

              <Input
                id="destiny"
                name="destiny"
                placeholder="DDD"
                onChange={formik.handleChange}
                value={formik.values.destiny}
              />


              <Input
                id="minutes"
                name="minutes"
                placeholder="Duração em minutos"
                onChange={formik.handleChange}
                value={formik.values.minutes}
              />


              <Select
                name="plan_id"
                onChange={formik.handleChange}
                value={formik.values.plan_id}
              >
                <option value="">Selecione um plano</option>
                <option value="1">op1</option>
                <option value="2">op2</option>

              </Select>

              <Button type="submit">Calcular</Button>

            </form>

            <p>{economically}</p>
            <p>{noEconomically}</p>

          </Calculator>
        </ContentContainer>

        <ContentContainer>
          <Plans>
            <tr>
              <td><h2>Plano</h2></td>
              <td><h2>De graça</h2></td>
            </tr>
            <tr>
              <td>Fale mais 30</td>
              <td>30 min</td>
            </tr>
            <tr>
              <td>Fale mais 60</td>
              <td>60 min</td>
            </tr>
            <tr>
              <td>Fale mais 120</td>
              <td>120 min</td>
            </tr>
          </Plans>
        </ContentContainer>

      </Content>
    </Container>
  );
};

export default Dashboard;
