import {
  Container,
  Top,
  Column,
  Logo,
  Text,
  Socials,
  Title,
  Item,
  SubscribeSection,
  InputGroup,
  Input,
  Button,
  Bottom
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Top>
        <Column>
          <Logo>Column<span>9</span></Logo>
          <Text>
            we are not here to sell you products,
            we sell value through our expertise.
          </Text>

          <Socials>
            <span>f</span>
            <span>t</span>
            <span>ig</span>
            <span>in</span>
          </Socials>
        </Column>

        <Column>
          <Title>Address:</Title>
          <Item>38 opebi Road, Ikeja, Lagos State, Nigeria.</Item>

          <Title>Phone:</Title>
          <Item>+2349023968389</Item>

          <Title>Email:</Title>
          <Item>contact@contentionary.com</Item>
        </Column>

        <Column>
          <Title>Company</Title>
          <Item>About Us</Item>
          <Item>Features</Item>
          <Item>Pricing</Item>
        </Column>
      </Top>

      <SubscribeSection>
        <h3>Subscribe to get latest updates</h3>

        <InputGroup>
          <Input placeholder="Your Email address" />
          <Button>Subscribe</Button>
        </InputGroup>
      </SubscribeSection>

      <Bottom>
        <span>© Contentionary</span>
        <span>Powered By Contentionary</span>
      </Bottom>
    </Container>
  );
}