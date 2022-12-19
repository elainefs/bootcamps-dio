import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media-exp1.licdn.com/dms/image/C4D16AQF6rItLBxXi5Q/profile-displaybackgroundimage-shrink_350_1400/0/1653162542458?e=1674691200&v=beta&t=Kyo-4DAunzwI6nkt__6Yw_2M-UVamtzkgzqdHhl1XzY" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/70538729?v=4" />
          <div>
            <h4>Elaine Ferreira</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de HTML e CSS no Bootcamp dio do Global
            Avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
