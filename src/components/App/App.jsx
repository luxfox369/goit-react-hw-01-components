import { Container } from './App.styled';
//import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
//import user from '../../user.json';
import stats from '../../data.json';

//task №1
// export const App = () => {
//   const { username, avatar, tag, location } = user;

//   return (
//     <Container>
//       <Profile
//         username={username}
//         avatar={avatar}
//         tag={tag}
//         location={location}
//       />
//     </Container>
//   );
// };
//Task2
export const App = () => {
  return (
    <Container>
      <Statistics title="Upload stats" data={stats} />
    </Container>
  );
};
