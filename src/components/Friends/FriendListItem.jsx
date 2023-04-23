import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ item }) => {
  const { avatar, name, isOnline } = item;
  return (
    <li className={css.item}>
      <span className={clsx(css.status, { [css.isOnline]: isOnline })}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
