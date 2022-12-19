import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Card } from "../../components/Card";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />     
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={35} nome="Elaine Ferreira" image="https://avatars.githubusercontent.com/u/70538729?v=4"/>
          <UserInfo percentual={30} nome="Elaine Ferreira" image="https://avatars.githubusercontent.com/u/70538729?v=4"/>
          <UserInfo percentual={85} nome="Elaine Ferreira" image="https://avatars.githubusercontent.com/u/70538729?v=4"/>
          <UserInfo percentual={55} nome="Elaine Ferreira" image="https://avatars.githubusercontent.com/u/70538729?v=4"/>
          <UserInfo percentual={25} nome="Elaine Ferreira" image="https://avatars.githubusercontent.com/u/70538729?v=4"/>
        </Column>
      </Container>
    </>
  );
};

export { Feed };
