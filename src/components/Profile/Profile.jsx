import PropTypes from 'prop-types';
import { Stats } from '../Stats/Stats';
import {
  Prof,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({ item }) => {
  const { username, avatar, tag, location } = item;
  return (
    <Prof>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats />
    </Prof>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
