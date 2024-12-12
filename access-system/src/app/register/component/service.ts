import axios, { AxiosError } from "axios";

export async function executePost({
  submitFormData,
}: {
  submitFormData: FormData;
}) {
  axios.post(
    "http://new.webdanca.com:8088/webdanca/v1/registration/signup",
    submitFormData
  );
}

export const postSignUp = async (formData: FormData) => {
  let response;
  try {
    response = await axios.post(
      "http://new.webdanca.com:8088/webdanca/v1/registration/signup",

      formData
    );
  } catch (err: unknown) {
    console.log("err <<><<>>>>>>>", err);
    response =  new AxiosError(err as unknown as string);
  }

  //   const response = await axios
  //     .post(
  //       "http://new.webdanca.com:8088/webdanca/v1/registration/signup",

  //       formData
  //     )
  // .catch((err) => {
  //     console.log("err <<><<>>>>>>>", err);
  //   throw new AxiosError(err);
  // });
  console.log("response", response);
  return response;
};
