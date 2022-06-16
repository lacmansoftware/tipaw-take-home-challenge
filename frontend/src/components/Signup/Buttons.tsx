import styled from "@emotion/styled";
import GoogleImage from "../../assets/google-icon-3SWGK4VN.svg";

const ButtonWrapper = styled.div`
  margin-bottom: 15px;
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
            strokeWidth="0"
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

