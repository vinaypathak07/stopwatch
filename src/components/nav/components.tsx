import styled from '../../styled';

export const Menu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: inline-block;
  width: 70px;
  height: 100vh;
  transition: transform 0.6s, opacity 0.6s, -webkit-transform 0.6s;
  will-change: transform, opacity;
`;

export const MenuPrimary = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 100%;
  vertical-align: top;
`;

export const MenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.color.navbar};
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
  transform-origin: left center;
  will-change: transform;
`;

export const MenuContainer = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
`;

export const LogoContainer = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  transition: background 0.2s, transform 0.2s;
  pointer-events: none;
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50px;
  height: 50px;
  line-height: 34px;
  padding: 8px;
  z-index: 999;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 26px 0 rgba(43, 80, 237, 0.31);
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: inline-block;
  height: 100px;
  white-space: nowrap;
  &:hover {
    & > section {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
    }

    & > span {
      transform: translate3d(10px, 0, 0);
      background: ${({ theme }) => theme.color.navbar};
    }
  }
`;

export const LogoArrow = styled.i`
  position: absolute;
  bottom: 0;
  left: 50%;
  color: rgba(207, 215, 227, 0.6);
  font-size: 16px;
  transform: translate3d(-50%, 0, 0);
`;

export const TabWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
`;
