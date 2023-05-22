import * as yup from "yup";

export const schema = yup.object().shape({
  image: yup.string().required(),
  name: yup.string().required(),
  price: yup.string().required()
});
