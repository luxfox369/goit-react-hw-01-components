import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';

import  user from '../../user.json';

export const App = () => {
const  { username, avatar, tag, location }= user;

  return (
    <Container>
      <Profile
        username={username}
        avatar={avatar}
        tag={tag}
        location={location}
     
      />
      
   </Container>
  );
};
