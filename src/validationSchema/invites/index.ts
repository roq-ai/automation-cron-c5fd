import * as yup from 'yup';

export const inviteValidationSchema = yup.object().shape({
  email: yup.string().required(),
  role: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
