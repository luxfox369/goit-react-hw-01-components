import user from '../../user.json';
import PropTypes from 'prop-types';
import { StatsList, Item, Label, Quantity } from './Stats.styled';

const stats = user.stats;
export const Stats = user => {
  const { followers, views, likes } = stats;
  // console.log("followers from stats ",followers)
  return (
    <StatsList>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </StatsList>
  );
};
Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
