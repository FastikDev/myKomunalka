import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@common/components/Button';
import AvatarBox from '@common/components/AvatarPicker/componets';
import { profileButtonsConfig } from './utils';
import { useTheme } from '@mui/system';
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  signOut,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { auth } from 'src/firebase/servises/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'src/firebase/firebase';
import type { UserData } from '@entities/user/types';

import * as Styled from './index.styled';

const Profile = () => {
  const theme = useTheme();
  const router = useRouter();

  const [profileData, setPofileData] = useState<UserData>({
    avatar: '',
    email: '',
    mobile: '',
    name: '',
    surname: '',
    family: '',
    city: '',
    street: '',
    house: '',
    flat: '',
  });

  const [isEmailVerified, setIsEmailVeristfied] = useState<boolean>(false);
  const [isMobileVerified, setIsMobileVerified] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        const uid = user.uid;
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          const register = data.register || {};
          const profile = data.profile || {};

          const user: UserData = {
            avatar: profile.avatar || '',
            email: register.email || '',
            mobile: register.mobile || '',
            name: profile.name || '',
            surname: profile.surname || '',
            family: profile.family || '',
            city: profile.city || '',
            street: profile.street || '',
            house: profile.house || '',
            flat: profile.flat || '',
          };
          setPofileData(user);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const checkVerification = async () => {
      if (!auth.currentUser) return;

      await auth.currentUser.reload();
      const verified = auth.currentUser.emailVerified;
      setIsEmailVeristfied(verified);

      if (verified) {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, { isEmailVerified: true });
      }
    };
    checkVerification();
  }, []);

  const handleVerifiedEmail = async () => {
    const user = auth.currentUser;

    try {
      await sendEmailVerification(user);
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        isEmailVerified: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  let confirmationResult: any;

  const handleSendSMS = async () => {
    console.log('work');
    try {
      const user = auth.currentUser;
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'normal' });

      confirmationResult = await signInWithPhoneNumber(auth, profileData.mobile, recaptcha);
      console.log('work');
    } catch (err) {
      console.log(err);
    }
  };

  //add mobile verification later
  const handleVerifiedSMS = async (code: string) => {
    try {
      await confirmationResult.confirm(code);

      const userRef = doc(db, 'users', auth.currentUser!.uid);
      await updateDoc(userRef, { isMobileVerified: true });
      setIsMobileVerified(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleProfileTab = (tab: string) => {
    router.push(
      {
        query: { ...router.query, tab: '/profile', sub: tab },
      },
      undefined,
      { shallow: true },
    );
  };

  const handleChangeProfile = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('[data-tab]');
    if (target) {
      const tab = target.getAttribute('data-tab');
      if (tab) {
        handleProfileTab(tab);
      }
    }
  };

  const handleProfileExit = async () => {
    await signOut(auth);
    router.push('./auth');
  };

  return (
    <Styled.Section>
      {!isEmailVerified && !isMobileVerified && (
        <Styled.Verification>не веріфікован</Styled.Verification>
      )}
      <Styled.TitleWrap>
        <AvatarBox />
        <Styled.TitleContent>
          <Styled.Title>{`${profileData.surname} ${profileData.name} ${profileData.family}`}</Styled.Title>
          <Styled.Adress>
            {profileData.city && profileData.street && profileData.house && profileData.flat && (
              <span>
                м. {profileData.city}, {profileData.street} {profileData.house}/{profileData.flat}
              </span>
            )}
          </Styled.Adress>
        </Styled.TitleContent>
      </Styled.TitleWrap>
      <Styled.UserDataBox>
        <Styled.DataRow>
          <Styled.UserEmail>{profileData.email}</Styled.UserEmail>
          {isEmailVerified ? (
            <Styled.VerifyIcon icon={faCheck} />
          ) : (
            <Styled.EditBtn>
              <Styled.BtnText onClick={handleVerifiedEmail}>підтвердити</Styled.BtnText>
            </Styled.EditBtn>
          )}
        </Styled.DataRow>
        <Styled.DataRow>
          {profileData.mobile && (
            <Styled.UserMobile>
              {profileData.mobile}
              {isMobileVerified ? (
                <Styled.VerifyIcon icon={faCheck} />
              ) : (
                <Styled.EditBtn>
                  <Styled.BtnText onClick={handleSendSMS}>підтвердити</Styled.BtnText>
                </Styled.EditBtn>
              )}
            </Styled.UserMobile>
          )}
        </Styled.DataRow>
      </Styled.UserDataBox>
      <div id="recaptcha-container"></div>
      <Styled.MenuContainer>
        <Styled.Menu onClick={handleChangeProfile}>
          {profileButtonsConfig.map(({ text, tab }) => (
            <Button
              key={tab}
              color={theme.palette.button.profile}
              text={text}
              width="100%"
              margin="16px"
              size="20px"
              weight="800"
              data-tab={tab}
            />
          ))}
        </Styled.Menu>
      </Styled.MenuContainer>
      <Styled.Exit onClick={handleProfileExit}>Вийти</Styled.Exit>
    </Styled.Section>
  );
};

export default Profile;
