import * as Yup from 'yup';

const schema = Yup.object().shape({
  plan_id: Yup.number().required('Selecione um plano!'),
  minutes: Yup.number()
    .min(1, 'A duração da chamada deve ser maior que 0')
    .required('Informe a duração da chamada!'),
  origin: Yup.string()
    .max(3, 'Informe 3 caracteres para o DDD de origem')
    .min(3, 'Informe 3 caracteres para o DDD de origem')
    .required('Informe o DDD de origem!'),
  destiny: Yup.string()
    .max(3, 'Informe 3 caracteres para o DDD de destino')
    .min(3, 'Informe 3 caracteres para o DDD de destino')
    .required('Informe o DDD de destino!'),
});

export default schema;
