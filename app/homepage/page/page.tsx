// Componente principal com a correção
import Contact from "@/app/contact/contact";
import {
  Container,
  Header,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  Image,
  Items,
  Input,
  Hero,
  HeroContent,
  HeroLeft,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  OutlineButton,
  Image_Hero,
  EnrolContainer,
  EnrolLeft,
  EnrolDescription,
  EnrolSection,
  EnrolRight,
  FormTitle,
  FormGroup,
  Select,
  ApplyButton,
  Form,
  InputeMain,
  ButtonWrapper,
  Image_Oculos,
  Course_Title,
  Course_SubTitle,
  MainTitle,
  Courses,
  Imagem,
  Card,
  Card_Image,
  Card_Content,
  Card_Title,
  Card_Sub,
} from "../styles";
import Footer from "@/app/footer/page";

export default function HomePage() {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Image src="/assets/logo.svg" alt="Logo" />
        </HeaderLeft>

        <HeaderMiddle>
          <Items>
            <li>Home</li>
            <li>Courses</li>
            <li>Instructors</li>
            <li>Schedules</li>
            <li>Contact Us</li>
          </Items>
        </HeaderMiddle>
        
        <HeaderRight>
          <Input>
            <input type="text" placeholder="Search..." />
            <img src="/assets/Vector.svg" alt="Search" />
          </Input>
          <Image src="/assets/person.svg" alt="Profile" />
        </HeaderRight>
      </Header>

      <Hero>
        <HeroContent>
          <HeroLeft>
            <HeroTitle>
              Take your career to
              <br />
              the next level.
            </HeroTitle>
            <HeroSubtitle>
              With indispensable courses
            </HeroSubtitle>
            <HeroButtons>
              <OutlineButton>Exams</OutlineButton>
              <PrimaryButton>Our Courses</PrimaryButton>
            </HeroButtons>
          </HeroLeft>
          <Image_Hero src="/assets/pessoas.jpg" alt="Students" />
        </HeroContent>
      </Hero>

{/* Seção Enrol for a course now com medidas exatas */}
<MainTitle>
      Enroll for a course
    </MainTitle>
<EnrolSection>
  <EnrolContainer>
    <EnrolLeft>
      <h3>Take your career to the next level.</h3>
      <EnrolDescription>
        With indispensable courses Lorem ipsum dolor sit at, consectetur adipiscing elit. Facilisi fermentum, dignissim pharetra. Aliquam
      </EnrolDescription>
      <EnrolDescription>
        Lorem ipsum dolor sit at, consectetur adipiscing elit. Facilisi fermentum, dignissim pharetra. Aliquam
      </EnrolDescription>
      <EnrolDescription>
        Lorem ipsum dolor sit at, consectetur adipiscing elit. Facilisi fermentum, dignissim pharetra. Aliquam
      </EnrolDescription>
    </EnrolLeft>

    <EnrolRight>
      <FormTitle>Registration for enrolment</FormTitle>
      <Form>
        <FormGroup>
          <InputeMain type="text" placeholder="Your full name" />
        </FormGroup>

        <FormGroup>
          <InputeMain type="email" placeholder="Your email address" />
        </FormGroup>

        <FormGroup>
          <InputeMain type="tel" placeholder="Your phone number" />
        </FormGroup>
        <FormGroup>
          <Select placeholder= 'Lists of courses goes here' />
        </FormGroup>
        <ButtonWrapper>
          <div>
          </div>
      <ApplyButton>Apply Now</ApplyButton>
      </ButtonWrapper>
      </Form>
    </EnrolRight>
  </EnrolContainer>
   <MainTitle>
      What we offer
    </MainTitle>
  <EnrolContainer>
    <EnrolLeft>
      <Image_Oculos src='/assets/Oculos.jpg' alt="Oculos" />
    </EnrolLeft>
    <EnrolLeft>
      <Course_Title>
        Online Courses
      </Course_Title>
      <Course_SubTitle>
        Our Course are the best among others
      </Course_SubTitle>
      <EnrolDescription>
        Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
      </EnrolDescription>
      <EnrolDescription>
        Lorem ipsum dolor sit at, consectetur adipiscing elit. Facilisi fermentum, dignissim pharetra. Aliquam
      </EnrolDescription>
      <EnrolDescription>
        Lorem ipsum dolor sit at, consectetur adipiscing elit. Facilisi fermentum, dignissim pharetra. Aliquam
      </EnrolDescription>
    </EnrolLeft>
  </EnrolContainer>
</EnrolSection>
  <EnrolSection>
      <MainTitle>
        Trending Courses
      </MainTitle>
     <Courses>
    <Imagem>
      <img src="/assets/1.jpg" alt="Milo" />
    </Imagem>
    <Imagem>
      <img src="/assets/2.jpg" alt="Milo" />
    </Imagem>
    <Imagem>
      <img src="/assets/3.jpg" alt="Milo" />
    </Imagem>
    <Imagem>
      <img src="/assets/data.jpg" alt="Milo" />
    </Imagem>
     </Courses>
  </EnrolSection>
    <EnrolContainer>
    
    <EnrolLeft>
      <Course_Title>
        Online Exams
      </Course_Title>
      <Course_SubTitle>
      Our exams prepare you for job opportunity
      </Course_SubTitle>
      <EnrolDescription>
      Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
      </EnrolDescription>
    </EnrolLeft>
    <EnrolLeft>
      <Image_Oculos src='/assets/job.jpg' alt="Oculos" />
    </EnrolLeft>
  </EnrolContainer>
  <EnrolSection>
      <MainTitle>
        Tests your ability here
      </MainTitle>
     <Courses>
    <Imagem>
      <img src="/assets/1.jpg" alt="Milo" />
    </Imagem>
    <Imagem>
      <img src="/assets/2.jpg" alt="Milo" />
    </Imagem>
    <Imagem>
      <img src="/assets/3.jpg" alt="Milo" />
    </Imagem>
    <Imagem>
      <img src="/assets/data.jpg" alt="Milo" />
    </Imagem>
     </Courses>
    </EnrolSection>
    <EnrolContainer>
    <EnrolLeft>
      <Image_Oculos src='/assets/leitura.jpg' alt="Oculos" />
    </EnrolLeft>
    <EnrolLeft>
      <Course_Title>
        Publication
      </Course_Title>
      <Course_SubTitle>
        Publications from the best Authors
      </Course_SubTitle>
      <EnrolDescription>
        Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam 
      </EnrolDescription>
    </EnrolLeft>
  </EnrolContainer>
  <EnrolSection>
      <MainTitle>
        Notable  Instructors
      </MainTitle>
     <Courses>
       <Card>
     <Card_Image>
    <img src="/assets/dev.svg" alt="Instructor" />
  </Card_Image>

  <Card_Content>
    <Card_Sub>Data Analyst</Card_Sub>
    <Card_Title>Prof. W.J Khatam</Card_Title>
  </Card_Content>
</Card>
<Card>
     <Card_Image>
    <img src="/assets/ux.svg" alt="Instructor"/>
  </Card_Image>

  <Card_Content>
    <Card_Sub>UX DESIGNER</Card_Sub>
    <Card_Title>Prof. Kaif Kofi O</Card_Title>
  </Card_Content>
</Card>
<Card>
     <Card_Image>
    <img src="/assets/ivy.svg" alt="Instructor"/>
  </Card_Image>

  <Card_Content>
    <Card_Sub>SOFTWARE DEV</Card_Sub>
    <Card_Title>Prof. Maryam J</Card_Title>
  </Card_Content>
</Card>
<Card>
     <Card_Image>
    <img src="/assets/med.svg" alt="Instructor" />
  </Card_Image>

  <Card_Content>
    <Card_Sub>Pscycologist</Card_Sub>
    <Card_Title>Prof Oluwole B.O</Card_Title>
  </Card_Content>
</Card>
     </Courses>
  </EnrolSection>
 
  <Contact/>
  <Footer/>
    </Container>
  );
}