import * as yup from 'yup';

export const cronJobValidationSchema = yup.object().shape({
  name: yup.string().required(),
  frequency: yup.string().required(),
  timing: yup.date().required(),
  parameters: yup.string().required(),
  organization_id: yup.string().nullable(),
});
