import styled from 'styled-components';
import backgroundImg from '../../images/background-picture.png';

export const CardWrapp = styled.ul`
  width: 380px;
  height: 460px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top left,
    rgba(71, 28, 169, 1),
    rgba(87, 54, 163, 1),
    rgba(75, 42, 153, 1)
  );
  box-shadow: -2.58px 6.87px 20.62px 0 rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BgImgWrapp = styled.div`
  position: relative;
  width: 380px;
  height: 222px;
  background-image: url(${backgroundImg});
  background-size: 308px 168px;
  background-repeat: no-repeat;
  background-position: 36px 28px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 8px;
    width: 100%;
    background: rgba(235, 216, 255, 1);
    box-shadow: inset 0 3.44px 2.58px 0 rgba(251, 248, 255, 1),
      inset 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.06),
      inset 0 -1.72px 3.44px 0 rgba(174, 123, 227, 1);
  }
`;

export const Logo = styled.img`
  width: 76px;
  height: 22px;
  margin-left: 20px;
`;

export const AvatarWrapp = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  overflow: hidden;
  border-radius: 50%;
  box-shadow: inset 0 4.39px 4.39px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2.2px 4.39px 0 rgba(174, 123, 227, 1),
    inset 0 3.44px 2.58px 0 rgba(251, 248, 255, 1),
    inset 0 0 0 8px rgba(235, 216, 255, 1);
`;
export const Avatar = styled.img`
  background-color: rgba(87, 54, 163, 1);
  width: 64px;
  border-radius: 50%;
  box-shadow: 0px -3.2px 4.39px -2px rgba(174, 123, 227, 1);
`;

export const TextBlock = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: rgba(235, 216, 255, 1);
  text-align: center;
  line-height: 1.22;
  text-transform: uppercase;
`;

export const TextTweets = styled.p`
  margin-top: 62px;
  font-size: 20px;
`;

export const TextFollowers = styled.p`
  margin-top: 16px;
  font-size: 20px;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 196px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 14px 0;
  color: rgba(55, 55, 55, 1);

  margin-top: 26px;

  box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.31px;
  cursor: pointer;

  ${({ isactive }) =>
    isactive
      ? ` background-color: #5CD3A8;   &:hover {
    background-color:  #52c79c;
  }`
      : ` background-color: rgba(235, 216, 255, 1);   &:hover {
    background-color: #e0c8f9;
  }`}
`;
