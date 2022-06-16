import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { SubmitButton } from "./Buttons";
import {
  FormGroup, 
  FormLabel,
  RequiredField, 
  InputContainer, 
  Input, 
  InputIconContainer, 
  Error, 
  PolicyRow, 
  AlreadyExist, 
} from "./index"

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPwd: string;
  agree: boolean;
}

const Container = styled.div`
  margin-top: 25px;
`;

const Form = () => {
  const formSchema = Yup.object().shape({
    firstname: Yup.string().required("Ce champ est requis"),
    lastname: Yup.string().required("Ce champ est requis"),
    email: Yup.string()
      .required("Ce champ est requis")
      .email("Adresse email invalide"),
    password: Yup.string()
      .required("Ce champ est requis")
      .min(6, "Veuillez entrer 6 caractère(s) minimum"),
    confirmPwd: Yup.string()
      .required("Ce champ est requis")
      .oneOf(
        [Yup.ref("password")],
        "Le mot de passe est différent du mot de passe de confirmation"
      ),
    agree: Yup.boolean().oneOf([true], "Ce champ est requis"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IFormInput) => {
    const endpoint = process.env.API_AUTH_ENDPOINT || "http://localhost:5000/auth";
    fetch(`${endpoint}/signup`, {
      method: "post",
      credentials: "same-origin",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const res = await response.json();
        if (res.status === 'ok') {
          alert(res.message);
        }
        if (res.status === 'validate-failed') {
          const {validationErrors} = res;
          type ValidationErorr = {
            value: string;
            msg: string;
            param: string;
            location: string;
          }
          validationErrors.map((item: ValidationErorr) => {
            alert(item.msg);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Failed");
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>
            Votre prénom
            <RequiredField>*</RequiredField>
          </FormLabel>
          <InputContainer>
            <Input
              {...register("firstname")}
              className={errors?.firstname ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.firstname?.message && (
            <Error>{errors?.firstname?.message}</Error>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Votre nom
            <RequiredField>*</RequiredField>
          </FormLabel>
          <InputContainer>
            <Input
              {...register("lastname")}
              className={errors?.lastname ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.lastname?.message && (
            <Error>{errors?.lastname?.message}</Error>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Votre email
            <RequiredField>*</RequiredField>
          </FormLabel>
          <InputContainer>
            <Input
              {...register("email")}
              className={errors?.email ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Votre mot de passe
            <RequiredField>*</RequiredField>
          </FormLabel>
          <InputContainer>
            <Input
              type="password"
              {...register("password")}
              className={errors?.password ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.password?.message && (
            <Error>{errors?.password?.message}</Error>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Confirmez votre mot de passe
            <RequiredField>*</RequiredField>
          </FormLabel>
          <InputContainer>
            <Input
              type="password"
              {...register("confirmPwd")}
              className={errors?.confirmPwd ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.confirmPwd?.message && (
            <Error>{errors?.confirmPwd?.message}</Error>
          )}
        </FormGroup>
        <FormGroup>
          <PolicyRow>
            <input
              type="checkbox"
              {...register("agree")}
              className={errors?.agree ? "inValid" : ""}
            />
            <label>
              <span>
                <p>
                  J'ai lu et accepté les{" "}
                  <a
                    target="_blank"
                    href="https://tipaw.com/conditions-generales-d-utilisation"
                  >
                    conditions générales d'utilisation
                  </a>{" "}
                  de Tipaw
                </p>
              </span>
            </label>
          </PolicyRow>
          {errors?.agree?.message && <Error>{errors?.agree?.message}</Error>}
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit">S'inscrire</SubmitButton>
        </FormGroup>
        <FormGroup>
          <AlreadyExist>
            <span>Vous avez déjà un compte?</span>
            <a href="https://tipaw.com/connexion">S'identifier</a>
          </AlreadyExist>
        </FormGroup>
      </form>
    </Container>
  );
};

export default Form;
