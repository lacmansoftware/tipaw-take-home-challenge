import { Row, Col } from "emotion-flex";
import styled from "@emotion/styled";

const SignupContainer = styled.div`
  padding: 50px 0px;
  background: #5acee8;
`;

const FormWrapper = styled.div`
  margin: 30px auto;
  padding-left: 50px;
  padding-right: 50px;
  width: min-content;
  max-width: 100%;
  position: relative;
`;

const Devider = styled.div`
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

const FormContainer = styled.div`
  z-index: 1;
  position: relative;
  border-radius: 15px;
  background: white;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 15%);
  padding: 30px;
  margin: auto;
  max-width: 100%;
  width: 540px;

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

const Signup = () => {
  return (
    <SignupContainer>
      <FormWrapper>
        <Devider />
        <FormContainer>
          <h2>S'inscrire</h2>
          <h3>Rejoignez Tipaw aujourd'hui. C'est gratuit !</h3>
          <div className="disp">
            Vous êtes un refuge, un éleveur, un vétérinaire ou toiletteur ?
            <a href="https://tipaw.com/inscription-tipaw">Cliquez-ici</a>
          </div>
        </FormContainer>
      </FormWrapper>
    </SignupContainer>
  );
};

export default Signup;
