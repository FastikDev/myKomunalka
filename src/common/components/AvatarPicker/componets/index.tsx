import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './index.styled';

const AvatarBox = () => {
  const profile = useSelector((state: RootState) => state.register.profile);

  console.log('avatar', profile.avatar);

  return (
    <Styled.AvatarBox>
      {profile.avatar ? (
        <img src={profile.avatar} alt="avatar" style={{ width: 40, height: 40 }} />
      ) : (
        <Styled.AvatarIcon icon={faUser} />
      )}
    </Styled.AvatarBox>
  );
};

export default AvatarBox;
