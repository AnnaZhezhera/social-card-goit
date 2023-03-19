import { useState, useRef } from 'react';
import {
  CardWrapp,
  CardInner,
  BgImgWrapp,
  Logo,
  AvatarWrapp,
  Avatar,
  TextBlock,
  TextTweets,
  TextFollowers,
  Btn,
} from './Card.styled';
import logo from '../../images/Logo.png';
import avatar from '../../images/Hansel.png';

const getFollowers = () => {
  const val = localStorage.getItem('followers');
  return val ? parseInt(val) : 0;
};

const getIsFollowing = () => localStorage.getItem('isFollowing') === 'true';

export const Card = () => {
  const [isFollowing, setIsFollowing] = useState(getIsFollowing());
  const [followers, setFollowers] = useState(getFollowers() || 100500);

  const checkbox = useRef();

  const onFollowToggle = () => {
    if (checkbox.current.checked) {
      localStorage.setItem('isFollowing', true);
      localStorage.setItem('followers', followers + 1);
      setFollowers(followers + 1);
      setIsFollowing(true);
    } else {
      localStorage.setItem('isFollowing', false);
      localStorage.setItem('followers', followers - 1);
      setIsFollowing(false);
      setFollowers(followers - 1);
    }
  };

  return (
    <CardWrapp>
      <CardInner>
        <BgImgWrapp>
          <Logo src={logo} alt="GOIT logo" />
        </BgImgWrapp>
        <AvatarWrapp>
          <Avatar src={avatar} alt="user avatar" />
        </AvatarWrapp>
        <TextBlock>
          <TextTweets>777 tweets</TextTweets>
          <TextFollowers>
            <span>
              {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>{' '}
            followers
          </TextFollowers>
          <form>
            {isFollowing ? (
              <Btn htmlFor="follow" style={{ backgroundColor: ' #5cd3a8' }}>
                Following
              </Btn>
            ) : (
              <Btn htmlFor="follow">Follow </Btn>
            )}
            <input
              type="checkbox"
              id="follow"
              checked={isFollowing}
              ref={checkbox}
              style={{ display: 'none' }}
              onChange={onFollowToggle}
            />
          </form>
        </TextBlock>
      </CardInner>
    </CardWrapp>
  );
};
