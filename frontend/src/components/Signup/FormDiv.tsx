import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { SubmitButton } from "./Buttons";

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

const DivFormGroup = styled.div`
  margin-bottom: 15px;
  vertical-align: top;
  width: calc(100% - 0px);
  display: block;
`;

const DivFormLabel = styled.div`
  margin-bottom: 6px;
  text-align: left;
  font-weight: 600;
  color: #8c96a3;
  font-size: 14px;
  font-weight: 700;
`;

const DivRequiredField = styled.div`
  color: #ff453e;
  margin-left: 6px;
  display: inline-block;
`;

const InputContainer = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  block-size: fit-content;

  & > input {
    :focus {
      outline: none;
    }
  }

  :focus-within > input {
    border-color: #5acee8;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 7px 12px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid #d7dae0;
  color: #707070 !important;
  background: white;
  padding-right: 42px;

  &.inValid {
    border-color: rgb(255, 69, 62) !important;
  }
`;

const InputIconContainer = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(255, 69, 62);
  text-align: left;
`;

const PolicyRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  & > input {
    cursor: pointer;
    width: 15px;
    height: 15px;
    text-align: left;
    color: #707070;
    opacity: 1;

    :focus {
      outline: none;
    }
  }

  & > label {
    margin-left: 10px;
    color: #616b77;
    font-weight: 500;
    font-size: 14px;
    text-align: left;

    & > span {
      display: inline;

      & > p {
        margin: 0;

        & > a {
          text-decoration: none;
          cursor: pointer;
          color: inherit;
          font-weight: inherit;

          :hover {
            color: rgb(90, 206, 232);
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const AlreadyExist = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 12px;

  & > span {
    color: #707070;
  }

  & > a {
    color: rgb(90, 206, 232);
    font-weight: 700;
    margin-left: 12px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const FormDiv = () => {
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
    // const endpoint = process.env.URL_AUTH_ENDPOINT;
    const endpoint = "http://192.168.108.85:5000/auth";
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
        <DivFormGroup>
          <DivFormLabel>
            Votre prénom
            <DivRequiredField>*</DivRequiredField>
          </DivFormLabel>
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
        </DivFormGroup>
        <DivFormGroup>
          <DivFormLabel>
            Votre nom
            <DivRequiredField>*</DivRequiredField>
          </DivFormLabel>
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
        </DivFormGroup>
        <DivFormGroup>
          <DivFormLabel>
            Votre email
            <DivRequiredField>*</DivRequiredField>
          </DivFormLabel>
          <InputContainer>
            <Input
              {...register("email")}
              className={errors?.email ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
        </DivFormGroup>
        <DivFormGroup>
          <DivFormLabel>
            Votre mot de passe
            <DivRequiredField>*</DivRequiredField>
          </DivFormLabel>
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
        </DivFormGroup>
        <DivFormGroup>
          <DivFormLabel>
            Confirmez votre mot de passe
            <DivRequiredField>*</DivRequiredField>
          </DivFormLabel>
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
        </DivFormGroup>
        <DivFormGroup>
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
        </DivFormGroup>
        <DivFormGroup>
          <SubmitButton type="submit">S'inscrire</SubmitButton>
        </DivFormGroup>
        <DivFormGroup>
          <AlreadyExist>
            <span>Vous avez déjà un compte?</span>
            <a href="https://tipaw.com/connexion">S'identifier</a>
          </AlreadyExist>
        </DivFormGroup>
      </form>
    </Container>
  );
};

export default FormDiv;
