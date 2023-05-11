import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ item }) => {
  const { avatar, name, isOnline } = item;
  return (
    <li className={css.item}>
      {/* композиція класів :спочатку css.status а зврху css.isOnline якщо isOnline true */}
      <span className={clsx(css.status, { [css.isOnline]: isOnline })}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
