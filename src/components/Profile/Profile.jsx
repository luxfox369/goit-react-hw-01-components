// import PropTypes from 'prop-types'; // ES6

import PropTypes from 'prop-types';
import { Stats } from '../Stats/Stats';
import user from '../../user.json';
import { Prof, Description, Avatar, Name, Tag, Location } from "./Profile.styled";
const { username, avatar, tag, location } = user;
export const Profile = (user) => {
    return(
    <Prof>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <Stats />
    </Prof>
    )
}
Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location:PropTypes.string
};