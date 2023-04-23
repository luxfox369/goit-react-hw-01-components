import { Container } from './App.styled';
//import { Profile } from '../Profile/Profile';
//import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
//import user from '../../user.json';
//import stats from '../../data.json';
import friends from '../../friends.json';
//console.log('friends', friends); //масив

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
//end Task1

//Task2
// export const App = () => {
//   return (
//     <Container>
//       <Statistics
//               title = "Upload stats"
//               data = { stats } />
//     </Container>
//   );
// };
//end Task2

//Task3
export const App = () => {
  return (
    <Container>
      <FriendList data={friends} />
    </Container>
  );
};

//end Task3
