import React, { useState, useEffect } from 'react';

import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { isNull } from 'util';
import {
  Container,
  Content,
  Calculator,
  Plans,
  ContentContainer,
  Input,
  Select,
  ValidationsMessages,
  Result,
} from './styles';

import Header from '../../componets/Header';
import ValidationErrors from '../../componets/ValidationErrors';
import Button from '../../componets/Button';

import schema from '../../validations/call';
import formatValue from '../../util/formatValue';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.min.css';

interface CallFormData {
  origin: string;
  destiny: string;
  minutes: number | null;
  plan_id: number;
}

interface Plans {
  id: number;
  duration: number;
  name: string;
}

interface CallResponse {
  more_economically: number;
  no_more_economically: number;
}

const Dashboard: React.FC = () => {
  const [call, setCall] = useState<CallResponse>({} as CallResponse);
  const [plans, setPlans] = useState<Plans[]>([]);

  useEffect(() => {
    api.get('/plans').then((response) => {
      setPlans(response.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      origin: '',
      destiny: '',
      minutes: 0,
      plan_id: 0,
    },
    onSubmit: (values: CallFormData) => {
      api
        .post('/calls', values)
        .then((response) => {
          setCall(response.data);
        })
        .catch((err) => {
          const { error } = err.response.data;
          toast.error(error);
        });
    },
    validationSchema: schema,
    isInitialValid: false,
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: true,
  });

  return (
    <Container>
      <Header />
      <Content>
        <ContentContainer>
          <Calculator>
            <h2>Descubra o valor da sua ligação</h2>

            <form onSubmit={formik.handleSubmit}>
              <div>
                <Input
                  id="origin"
                  name="origin"
                  placeholder="DDD de origem"
                  onChange={formik.handleChange}
                  value={formik.values.origin}
                />

                <Input
                  id="destiny"
                  name="destiny"
                  placeholder="DDD de destino"
                  onChange={formik.handleChange}
                  value={formik.values.destiny}
                />
              </div>
              <div>
                <Input
                  id="minutes"
                  name="minutes"
                  type="number"
                  placeholder="Duração em minutos"
                  onChange={formik.handleChange}
                  value={formik.values.minutes || undefined}
                />

                <Select
                  name="plan_id"
                  onChange={formik.handleChange}
                  value={formik.values.plan_id}
                >
                  <option value="">Selecione um plano</option>
                  {plans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name}
                    </option>
                  ))}
                </Select>
              </div>

              <Button type="submit">Calcular</Button>
            </form>

            <ValidationsMessages>
              <ValidationErrors
                touched={formik.touched.origin}
                errors={formik.errors.origin}
              />
              <ValidationErrors
                touched={formik.touched.destiny}
                errors={formik.errors.destiny}
              />
              <ValidationErrors
                touched={formik.touched.minutes}
                errors={formik.errors.minutes}
              />
              <ValidationErrors
                touched={formik.touched.plan_id}
                errors={formik.errors.plan_id}
              />
            </ValidationsMessages>
          </Calculator>
        </ContentContainer>

        <ContentContainer>
          <Plans>
            <thead>
              <tr>
                <th>
                  <h2>Plano</h2>
                </th>
                <th>
                  <h2>De graça</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => {
                return (
                  <tr key={plan.id}>
                    <td>{plan.name}</td>
                    <td>{plan.duration} min</td>
                  </tr>
                );
              })}
            </tbody>
          </Plans>

          {!isNull(call.more_economically) && call.no_more_economically && (
            <Result>
              <h2>Custo previsto da chamada</h2>
              <p>
                <strong>Com Fale mais</strong>:{' '}
                {formatValue(call.more_economically)}
              </p>
              <p>
                <strong>Sem Fale mais</strong>:{' '}
                {formatValue(call.no_more_economically)}
              </p>
            </Result>
          )}
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
