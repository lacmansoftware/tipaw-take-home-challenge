import styled from "@emotion/styled";

export const SignupContainer = styled.div`
  padding: 50px 0px;
  background: #5acee8;
`;

export const FormWrapper = styled.div`
  margin: 30px auto;
  padding-left: 50px;
  padding-right: 50px;
  width: min-content;
  max-width: 100%;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
`;

export const Divider = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  z-index: 2;
  overflow: hidden;
  overflow-x: auto;
`;

export const FormContainer = styled.div`
  z-index: 1;
  position: relative;
  border-radius: 15px;
  background: white;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 15%);
  padding: 30px;
  margin: auto;
  max-width: 100%;
  width: 540px;

  @media (max-width: 600px) {
    width: 100% !important;
  }
  @media (max-width: 800px) {
    width: 440px;
  }
  @media (max-width: 1000px) {
    width: 540px;
  }
  @media (max-width: 1280px) {
    width: 540px;
  }

  & > h2 {
    font-family: "zenon", "serif";
    color: #5acee8;
    font-weight: 500;
    font-size: 36px;
    margin: 0;
    margin-bottom: 15px;
  }

  & > h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  & > .disp {
    margin-bottom: 30px;

    & > a {
      text-decoration: none;
      cursor: pointer;
      color: #5acee8;
      font-weight: 700;
    }
  }
`;

export const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #d7dae0;
  margin: 20px 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  width: calc(100% - 0px);
  display: block;
`;

export const FormLabel = styled.div`
  margin-bottom: 6px;
  text-align: left;
  font-weight: 600;
  color: #8c96a3;
  font-size: 14px;
  font-weight: 700;
`;

export const RequiredField = styled.div`
  color: #ff453e;
  margin-left: 6px;
  display: inline-block;
`;

export const InputContainer = styled.div`
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

export const Input = styled.input`
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

export const InputIconContainer = styled.div`
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

export const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(255, 69, 62);
  text-align: left;
`;

export const PolicyRow = styled.div`
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

export const AlreadyExist = styled.div`
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