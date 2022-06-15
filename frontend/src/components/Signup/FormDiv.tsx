import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { SubmitButton } from "./Buttons";

interface IFormInput {
  firstName: string;
  // lastName: string;
  // email: string;
  // password: string;
  // confirmPassword: string;
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

  :focus-within > input {
    border-color: #5acee8 !important;
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

const FormDiv = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

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
              {...register("firstName", {
                required: true,
              })}
              className={errors?.firstName ? "inValid" : ""}
            />
            <InputIconContainer></InputIconContainer>
          </InputContainer>
          {errors?.firstName?.type === "required" && (
            <Error>Ce champ est requis</Error>
          )}
        </DivFormGroup>
        <DivFormGroup>
          <SubmitButton type="submit">S'inscrire</SubmitButton>
        </DivFormGroup>
      </form>
    </Container>
  );
};

export default FormDiv;
