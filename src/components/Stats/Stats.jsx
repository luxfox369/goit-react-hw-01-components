import user from '../../user.json';
import PropTypes from 'prop-types';
import { StatsList, Item, Label, Quantity } from "./Stats.styled";

const stats = user.stats;
const { followers, views,likes } = stats;

export const Stats = ( stats) => (
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
)
Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes:PropTypes.number
}