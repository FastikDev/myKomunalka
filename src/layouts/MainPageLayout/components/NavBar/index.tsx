import React from 'react';
import { ACTIVE_TAB } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faFireFlameCurved, faBolt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'src/Redux';

import * as Styled from './index.styled';

const NavBar = () => {
  const router = useRouter();
  const currentTab = (router.query.tab as string) || '/';
  const { profile, tariffs } = useSelector((state: RootState) => state.register);

  const isDisabled =
    Object.values(profile).some(v => v === '' || v === null || v === undefined) ||
    Object.values(tariffs).some(v => v === '' || v === null || v === undefined);

  const handleTabChange = (value: string) => {
    router.push({ pathname: router.pathname, query: { tab: value } }, undefined, { shallow: true });
  };

  return (
    <Styled.NavBar>
      <Styled.NavBarConent>
        <Styled.NavTabs value={currentTab}>
          <Styled.NavTab
            icon={<FontAwesomeIcon icon={faBolt} color="#ffd34b" style={{ fontSize: '40px' }} />}
            value={ACTIVE_TAB.electricity}
            onClick={() => handleTabChange(ACTIVE_TAB.electricity)}
          />
          <Styled.NavTab
            icon={<FontAwesomeIcon icon={faDroplet} color="#74c0fc" style={{ fontSize: '40px' }} />}
            value={ACTIVE_TAB.water}
            onClick={() => handleTabChange(ACTIVE_TAB.water)}
          />
          <Styled.NavTab
            icon={
              <FontAwesomeIcon
                icon={faFireFlameCurved}
                color="#ea502a"
                style={{ fontSize: '40px' }}
                onClick={() => handleTabChange(ACTIVE_TAB.gas)}
              />
            }
            value={ACTIVE_TAB.gas}
          />
          <Styled.NavTab
            icon={<FontAwesomeIcon icon={faUser} color="#000" style={{ fontSize: '40px' }} />}
            value={ACTIVE_TAB.profile}
            onClick={() => handleTabChange(ACTIVE_TAB.profile)}
          />
          {isDisabled && <Styled.RedDot />}
        </Styled.NavTabs>
      </Styled.NavBarConent>
    </Styled.NavBar>
  );
};

export default NavBar;
