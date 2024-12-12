"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";
import { SnackbarProvider } from "notistack";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaRegisterType } from "./component/SchemaRegister";
//import { postSignUp } from "./component/service";
import * as Label from "@radix-ui/react-label";
import Image from "next/image";

const SignUp = () => {
  const form = useForm<SchemaRegisterType>({
    resolver: zodResolver(SchemaRegisterType()),
    mode: "onSubmit",
    defaultValues: { check: false },
  });

  const onSubmit = async (formData: SchemaRegisterType) => {
    const response = await fetch("api/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "teste name",
        email: "teste email", // Substitua pelos seus dados
      }),
    });

    const result = await response.json();
    console.log(result);
    formData.email = formData.email.trim();

    // testePost(submitFormData)
    //   .then(function () {
    //     enqueueSnackbar("Email enviado com sucesso", { variant: "success" });
    //   })
    //   .catch(function (error) {
    //     console.log("***", error?.message.message);
    //     enqueueSnackbar(error?.message?.message, { variant: "error" });
    //   });
  };

  /*const { mutate, status } = useMutation({
    mutationFn: postSignUp,
    onSuccess: data => {
      enqueueSnackbar(t('msg-success-registration'), { variant: 'success' })
      Router.push({
        pathname: '/auth/validate',
        query: {
          view: 'confirmSignUp',
          email: encodeURIComponent(data.data?.email as unknown as string)
        }
      })
    },
    onError: err => {
      enqueueSnackbar(err.message, {
        variant: 'error'
      })
    }
  })*/
  const router = useRouter();
  return (
    <SnackbarProvider>
      <div className="flex flex-col items-center justify-center h-screen gap-3 dark:bg-background-empty-dark sm:bg-background-secondary sm:dark:bg-background-secondary-dark  bg-gray-100">
        <div className=" md-h:w-36 md-h:h-36 w-44 h-44 text-zinc-500 dark:text-background-empty-dark">
          <Image
            className="dark:invert"
            src="/taskinset.svg"
            alt="Logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="flex flex-col w-full p-5 text-sm space-y-3 sm:px-16 sm:py-8 sm:w-5/6 md:w-7/12 lg:w-5/12 xl:w-4/12 dark:bg-background-empty-dark sm:shadow-lg rounded-xl sm:text-base bg-white">
          <div className="flex flex-col items-center justify-center space-y-2 pb">
            <Label.Root
              className="tpb-2 text-2xl font-bold text-black dark:text-white sm:text-titulo-h1"
              htmlFor="firstName"
            >
              Crie sua Conta
            </Label.Root>
          </div>
          <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-1">
              <div>
                <Label.Root
                  className="flex gap-1 flex-nowrap text-color-contrast dark:text-color-contrast-dark"
                  htmlFor="firstName">
                  Informe o seu Nome
                  <>
                    <span className="text-red-500">*</span>
                  </>
                </Label.Root>
                <input
                  className="border"
                  {...form.register("name")}
                  maxLength={64}
                />

                <ErrorMessage errors={form.formState.errors} name="name" />
              </div>
              <div>
              <Label.Root
                  className="flex gap-1 flex-nowrap text-color-contrast dark:text-color-contrast-dark"
                  htmlFor="firstName">
                  Informe o seu E-mail
                  <>
                    <span className="text-red-500">*</span>
                  </>
                </Label.Root>

                <input
                  className="border"
                  {...form.register("email")}
                  type="email"
                  maxLength={64}
                />

                <ErrorMessage errors={form.formState.errors} name="email" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox.Root
                  {...form.register("check")}
                  className="CheckboxRoot appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white  mt-1"
                  defaultChecked
                  id="c1"
                >
                  <Checkbox.Indicator className="CheckboxIndicator">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <ErrorMessage errors={form.formState.errors} name="check" />
                <label className="Label" htmlFor="c1">
                  Aceitar os Termos de Uso
                </label>
              </div>

              {/*   <FormField
                    name="check"
                    control={form.control}
                    render={({ field: { onChange, value } }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <div className="flex place-items-center gap-2 place-content-center">
                            <Checkbox
                              checked={value}
                              onCheckedChange={onChange}
                              {...form.register("check")}
                            />
                            {"Aceitar termos de uso"}
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />*/}
            </div>

            <div className="flex justify-between py-2">
              <button
                className="bg-black w-10 h-10"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/auth/login");
                }}
              >
                {/* {t("form-common:previous")} */}
              </button>
              {/* {status === "pending" && (
                  <div className="flex items-center justify-center w-24">
                    <SpinnerBasic />
                  </div>
                )} */}

              <button type="submit">Cadastrar</button>
            </div>
          </form>
          {/* </Form> */}
        </div>
        <div className="flex items-center pt-6 gap-2 flex-nowrap">
          {/* <span>{t("label-confirm-sign-up-pt1")}</span> */}
          <span
            onClick={() => {
              router.push("/auth/login");
            }}
            className="cursor-pointer sm:text-link text-icon dark:text-icon-dark"
          >
            {/* {t("label-confirm-sign-up-pt2")} */}
          </span>
        </div>
      </div>
    </SnackbarProvider>
  );
};
export default SignUp;
