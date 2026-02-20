import styled from "styled-components";
import theme from "../src/styles/theme";

// Breakpoints
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  large: "1440px",
};

export const Header = styled.div`
  width: 100%;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
`;

export const HeaderLeft = styled.div``;

export const Image = styled.img`
  width: 106px;
  height: 24px;
`;

export const HeaderMiddle = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
  }
`;

export const Items = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  li {
    cursor: pointer;
    font-size: 16px;
    color: ${theme.colors.text};
    transition: 0.3s;
    font-family: ${theme.fonts.openSans};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;

    li {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-wrap: wrap;

    li {
      font-size: 12px;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 200px;
    height: 36px;
    padding: 0 40px 0 12px;
    border-radius: 6px;
    border: 1px solid #D9DCE0;
    outline: none;
    font-size: 14px;
  }

  img {
    position: absolute;
    right: 12px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      width: 150px;
      height: 32px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    input {
      width: 100px;
      height: 30px;
      font-size: 12px;
    }
  }
`;
// Estilos corrigidos para o Hero
export const Hero = styled.section`
  max-width: 1440px;
  width: 100%;
  height: auto;
  min-height: 490px;
  background-image: url("/assets/pessoas.jpg");
  background-size: cover;
  background-position: center;
  background-color: #1B353D;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 12px; 
  overflow: hidden; 
  margin: 20px 0; 

  /* overlay escuro */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 40, 40, 0.7);
  }

  @media (max-width: 768px) {
    min-height: 350px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    min-height: 250px;
    border-radius: 8px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 25px 0.8rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 15px 1rem;
    gap: 1rem;
  }
`;

export const HeroLeft = styled.div`
  max-width: 550px;
  color: white;
`;

export const HeroTitle = styled.h1`
  font-size: 58px; 
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 42px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 32px;
  margin-bottom: 30px;
  opacity: 0.95;
  color: white;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export const PrimaryButton = styled.button`
  background: white;
  color: #1b353d;
  padding: 14px 28px; /* Aumentar padding */
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

export const OutlineButton = styled.button`
  background: transparent;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  border: 2px solid white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const Image_Hero = styled.img`
  width: 500px;
  height: 460px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.2);
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 350px;
    height: 320px;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    height: 250px;
    margin-right: 0;
  }
`;
export const Image_Oculos = styled.img`
  width: 604px;
  height: 460px;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 400px;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: auto;
  }
`;

// export const EnrolCourse = styled.main`
// width: 100%;
// height: auto;
// max-height: 900%;

``

// export const InputForm = styled.input`
// padding: 12px 10px;
// font-size: 16px;
// `

// export const 

// styles.js - Seção Enrol ajustada com as medidas exatas
export const Course_Title = styled.h1`
  font-size: 2.5rem; 
  color: #0F756B;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const Course_SubTitle = styled.h1`
  font-size: 2rem; 
  color: #404040CC;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const EnrolSection = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #FFF;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const EnrolContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  padding: 20px 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 20px 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 30px;
    padding: 15px 1rem;
  }
`;

export const EnrolLeft = styled.div`
  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #1B353D;
    margin-bottom: 24px;
    line-height: 1.2;
  }

  h3 {
    font-size: 32px;
    font-weight: 600;
    color: #1B353D;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 18px;
    }
  }
`;

export const EnrolDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 20px;
  max-width: 500px;
`;

export const EnrolRight = styled.div`
  width: 605px; 
  height: 555px; 
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1B353D;
  margin-bottom: 63px; 
  text-align: left;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px; 
  width: 100%;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1B353D;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InputeMain = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color:#FAFAFC ;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1B353D;
    box-shadow: 0 0 0 3px rgba(27, 53, 61, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;
export const SelectMain = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color:#FAFAFC ;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1B353D;
    box-shadow: 0 0 0 3px rgba(27, 53, 61, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  background: white;
  cursor: pointer;
  color: #4a5568;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1B353D;
    box-shadow: 0 0 0 3px rgba(27, 53, 61, 0.1);
  }
`;

export const ApplyButton = styled.button`
  margin-top: auto; 
  align-self: flex-end; /* para direita */
  
  padding: 12px 40px;
  border: none;
  background: #1f3c3d;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
  margin: 20px ;
`;

export const Trends = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const Courses = styled.div`
width: 100%;
  padding: 10px;
  display: flex;
  gap: 20px; 
  margin-top: 10px;
`;
export const Imagem = styled.div`
  max-width: 360px;
  height: 290px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;

  }
`;

export const Card = styled.div`
  width: 260px;
  padding: 40px 20px;
  text-align: center;
  border: none;
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  }
`;

export const Card_Image = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Card_Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Card_Sub = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  color: #777;
  text-transform: uppercase;
`;

export const Card_Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #222;
`;