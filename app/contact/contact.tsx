import {
  Container,
  Content,
  Left,
  Right,
  Title,
  Description,
  InfoCard,
  InfoItem,
  Icon,
  Socials,
  Input,
  TextArea,
  Button
} from "./styles";

export default function Contact() {
  return (
    <Container>
      <Title>Get In Touch</Title>
      <Description>
        Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum,
        dignissim pharetra. Aliquam Lorem ipsum dolor sit at.
      </Description>

      <Content>
        <Left>
          <InfoCard>
            <InfoItem>
              <Icon>📧</Icon>
              <div>
                <strong>info@column9.com</strong>
                <p>Lorem ipsum lorem ipsum</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>📞</Icon>
              <div>
                <strong>+234 80XXXXXXX</strong>
                <p>Lorem ipsum lorem ipsum</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>📍</Icon>
              <div>
                <strong>Support center →</strong>
                <p>Lorem ipsum lorem ipsum</p>
              </div>
            </InfoItem>

            <Socials>
              <span>f</span>
              <span>t</span>
              <span>g+</span>
              <span>in</span>
            </Socials>
          </InfoCard>
        </Left>

        <Right>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <TextArea placeholder="Input Text" />
          <Button>Send</Button>
        </Right>
      </Content>
    </Container>
  );
}