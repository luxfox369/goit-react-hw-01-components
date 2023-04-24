import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import user from '../../user.json';
import { Statistics } from '../Statistics/Statistics';
import stats from '../../data.json';
import { FriendList } from '../Friends/FriendList';
import friends from '../../friends.json';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import transactions from '../../transactions.json';

//all task in one
export const App = () => {
  return (
    <Container>
      <Profile item={user} />
      <Statistics title="Upload stats" data={stats} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </Container>
  );
};
//end all task
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
// export const App = () => {
//   return (
//     <Container>
//       <FriendList data={friends} />
//     </Container>
//   );
// };

//end Task3
//Task4
// export const App = () => {
//   return (
//     <Container>

//       <TransactionHistory data={transactions} />
//     </Container>
//   );
// };

//end Task4
