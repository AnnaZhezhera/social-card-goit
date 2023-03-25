import { useState, useEffect } from 'react';
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

export const CardItem = ({ item }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(parseInt(item.followers));

  const storageKey = 'followers_' + item.id;

  useEffect(() => {
    const savedFollowers = JSON.parse(localStorage.getItem(storageKey));
    if (savedFollowers) {
      setFollowers(savedFollowers.followers);
      setIsFollowing(savedFollowers.isFollowing);
    }
  }, [storageKey]);

  const handleClick = () => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(
        isFollowing
          ? { followers: followers - 1, isFollowing: false }
          : { followers: followers + 1, isFollowing: true }
      )
    );
    setFollowers(
      isFollowing ? prevCount => prevCount - 1 : prevCount => prevCount + 1
    );
    setIsFollowing(prevCount => !prevCount);
  };

  return (
    <CardWrapp>
      <CardInner>
        <BgImgWrapp>
          <Logo src={logo} alt="GOIT logo" width={62} />
        </BgImgWrapp>

        <AvatarWrapp>
          <Avatar src={item.avatar.url} alt="user avatar" />
        </AvatarWrapp>
        <TextBlock>
          <TextTweets>{item.tweets} tweets</TextTweets>
          <TextFollowers>
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            followers
          </TextFollowers>

          <Btn type="button" onClick={handleClick} isactive={isFollowing}>
            {isFollowing ? 'following' : 'follow'}
          </Btn>
        </TextBlock>
      </CardInner>
    </CardWrapp>
  );
};
