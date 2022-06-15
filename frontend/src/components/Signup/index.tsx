import styled from "@emotion/styled";
import GoogleImage from "../../assets/google-icon-3SWGK4VN.svg";

const ButtonWrapper = styled.div`
  margin-bottom: 15px;
  vertical-align: top;
  width: calc(100% - 0px);
  display: block;
`;

const Button = styled.button`
  white-space: nowrap;
  box-sizing: border-box !important;
  border-radius: 15px;
  height: 40px;
  line-height: unset;
  padding: 0px 24px;
  box-shadow: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonImageDiv = styled.div`
  margin-right: 12px;
  width: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleButton = styled(Button)`
  color: #707070;
  background-color: white;
  border: 2px solid transparent;
  border-color: #707070;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const FacebookButton = styled(Button)`
  color: white;
  background-color: #5acee8;
  border: none;
  border-color: white;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #3b5998;
`;

export const SubmitButton = styled(Button)`
  color: white;
  background-color: #ffcc01;
  border: none;
  border-color: white;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const GoogleButtonDiv = () => {
  return (
    <ButtonWrapper>
      <GoogleButton color="medium" type="button">
        <ButtonImageDiv>
          <img src={GoogleImage} alt="" />
        </ButtonImageDiv>
        Inscription avec Google
      </GoogleButton>
    </ButtonWrapper>
  );
};

export const FacebookButtonDiv = () => {
  return (
    <ButtonWrapper>
      <FacebookButton color="medium" type="button">
        <ButtonImageDiv>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>{" "}
        </ButtonImageDiv>
        Inscription avec Facebook
      </FacebookButton>
    </ButtonWrapper>
  );
};

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
