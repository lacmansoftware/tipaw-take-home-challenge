import {
  SignupContainer, 
  FormWrapper,
  Divider,
  FormContainer,
} from "../components/Signup";
import {
  GoogleButtonDiv, 
  FacebookButtonDiv,
} from "../components/Signup/Buttons";
import Form from "../components/Signup/Form";

const Signup = () => {
  return (
    <SignupContainer>
      <FormWrapper>
        <Divider />
        <FormContainer>
          <h2>S'inscrire</h2>
          <h3>Rejoignez Tipaw aujourd'hui. C'est gratuit !</h3>
          <div className="disp">
            Vous êtes un refuge, un éleveur, un vétérinaire ou toiletteur ?
            <a href="https://tipaw.com/inscription-tipaw">Cliquez-ici</a>
          </div>
          <GoogleButtonDiv />
          <FacebookButtonDiv />
          <Form />
        </FormContainer>
      </FormWrapper>
    </SignupContainer>
  );
};

export default Signup;
