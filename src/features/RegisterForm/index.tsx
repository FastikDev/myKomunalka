import React from 'react';
import Form from '@features/Form';
import AvatarPicker from '@common/components/AvatarPicker';
import { RegisterFields, profileFields, tariffsFields } from '@features/Form/utils/config';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import * as Styled from './index.styled';

const RegisterForm = () => {
  const router = useRouter();

  let Content = null;

  switch (router.query.page) {
    case 'page-1':
      Content = (
        <>
          <AvatarPicker />
          <Form fields={RegisterFields} page="page-1" />
        </>
      );
      break;
    case 'page-2':
      Content = <Form fields={profileFields} page="page-2" />;
      break;
    case 'page-3':
      Content = <Form fields={tariffsFields} page="page-3" />;
      break;
    default:
      Content = (
        <>
          <Styled.TitleWrap>
            <AvatarPicker />
          </Styled.TitleWrap>
          <Form fields={RegisterFields} page="page-1" />
        </>
      );
  }

  return (
    <>
      {router.query.page === 'page-1' && <AvatarPicker />}
      <Styled.Section>{Content}</Styled.Section>
    </>
  );
};

export default RegisterForm;
