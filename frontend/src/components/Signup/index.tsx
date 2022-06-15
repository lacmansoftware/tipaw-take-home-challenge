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
