import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowRotateRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import MainPageLayout from '@layouts/MainPageLayout';
import Header from '@layouts/MainPageLayout/components/Header';
import MeterWrapper from '@features/MeterPage/component';
import Profile from '@features/Profile';
import UserProfile from '@features/UserProfile';
import Tariffics from '@features/Tariffics';
import Payments from '@features/Paymans';
import MeterPopUp from '@features/MeterPopUp';
import { auth } from 'src/firebase/servises/auth';
import { db } from 'src/firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ACTIVE_PROFILE_TAB } from '@features/Profile/config';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'src/Redux';
import { setMeterValue } from 'src/Redux/slice/couters';
import { useTheme } from '@mui/material/styles';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const tab = (router.query.tab as string) || 'electricity';
  const subTab = (router.query.sub as string) || undefined;

  const [lampColors, setLampColors] = useState<Record<string, string>>({
    '/electricity': theme.palette.lamp.primary,
    '/water': theme.palette.lamp.primary,
    '/gas': theme.palette.lamp.primary,
  });

  const [isFirst, setIsFirst] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const uid = user.uid;
        const userRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userRef);
        const meterValue = docSnap.data().meter;
        console.log(meterValue);
        const hasZero = Object.values(meterValue).some(v => Number(v) === 0);
        setIsFirst(hasZero);
      }
    });

    return () => unsubscribe();
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  const profileSaved = useSelector((state: RootState) => state.register.profileSaved);
  const inputValues = useSelector((state: RootState) => state.meter);

  const updateLampColor = (tabKey: string, color: string) => {
    setLampColors(prev => {
      const next = { ...prev, [tabKey]: color };
      return next;
    });
  };

  const updateInputValues = (tabKey: keyof typeof inputValues, value: string | number) => {
    dispatch(setMeterValue({ type: tabKey, value }));
  };

  let Content = null;

  const tabWithSlash = tab.startsWith('/') ? tab : '/' + tab;

  switch (tabWithSlash) {
    case '/electricity':
      Content = (
        <MeterWrapper
          type="electricity"
          lampColor={lampColors['/electricity']}
          setLampColor={color => updateLampColor('/electricity', color)}
          value={inputValues['electricity']}
          onChange={val => updateInputValues('electricity', val)}
        />
      );
      break;
    case '/water':
      Content = (
        <MeterWrapper
          type="water"
          lampColor={lampColors['/water']}
          setLampColor={color => updateLampColor('/water', color)}
          value={inputValues['water']}
          onChange={val => updateInputValues('water', val)}
        />
      );
      break;
    case '/gas':
      Content = (
        <MeterWrapper
          type="gas"
          lampColor={lampColors['/gas']}
          setLampColor={color => updateLampColor('/gas', color)}
          value={inputValues['gas']}
          onChange={val => updateInputValues('gas', val)}
        />
      );
      break;
    case '/profile':
      switch (subTab) {
        case ACTIVE_PROFILE_TAB.edit:
          Content = <UserProfile />;
          break;
        case ACTIVE_PROFILE_TAB.tariffs:
          Content = <Tariffics />;
          break;
        case ACTIVE_PROFILE_TAB.paymants:
          Content = <Payments />;
          break;
        default:
          Content = <Profile />;
      }
      break;
    default:
      Content = (
        <MeterWrapper
          type="electricity"
          lampColor={lampColors['/electricity']}
          setLampColor={color => updateLampColor('/electricity', color)}
          value={inputValues['electricity']}
          onChange={val => updateInputValues('electricity', val)}
        />
      );
  }

  const headerColor =
    tab === '/profile' && subTab
      ? profileSaved
        ? theme.palette.lamp.secondary
        : '#000'
      : lampColors[tabWithSlash] || theme.palette.lamp.primary;

  const headerIcon =
    tab === '/profile'
      ? subTab
        ? profileSaved
          ? faCheck
          : faArrowRotateRight
        : undefined
      : faLightbulb;

  return (
    <MainPageLayout>
      <Header format="dd.mm.yy" icon={<FontAwesomeIcon icon={headerIcon} />} color={headerColor} />
      {isFirst ? <MeterPopUp /> : Content}
    </MainPageLayout>
  );
};

export default Home;
