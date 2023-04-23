import PropTypes, { shape } from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ data }) => {
  return (
    <ul className={css.friendList}>
      {data.map(friend => {
        return <FriendListItem item={friend} />;
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(shape),
};
