import type {
  UserForm,
  FormField,
  UserTariffs,
  Auth,
  FogotPassword,
  Restore,
  Register,
  Meter,
} from '@entities/form/types';

const MeterLabels: Record<keyof Meter, string> = {
  electricity: 'Електроенергія',
  water: 'Вода',
  gas: 'Газ',
};

const userProfileLabels: Record<keyof UserForm, string> = {
  surname: 'Прізвище',
  name: "Ім'я",
  family: 'По-батькові',
  city: 'Місто',
  street: 'Вулиця',
  house: 'Будинок',
  flat: 'Квартира',
};

const userTariffsLabels: Record<keyof UserTariffs, string> = {
  electricity: 'Електроенергія',
  water: 'Вода',
  gas: 'Газ',
  tube: 'Опалення',
  trash: 'Сміття',
  flatWall: 'Квартплата',
};

const AuthLebels: Record<keyof Auth, string> = {
  login: 'логін',
  password: 'пароль',
};

const authTypes: Partial<Record<keyof Auth, string>> = {
  login: 'text',
  password: 'password',
};

const resetTypes: Partial<Record<keyof FogotPassword, string>> = {
  newPassword: 'password',
  replayPassword: 'password',
};

const registerTypes: Partial<Record<keyof Register, string | number>> = {
  login: 'text',
  password: 'password',
  returnPassword: 'password',
  email: 'text',
  mobile: 'number',
};

const FogotPasswordLabels: Record<keyof FogotPassword, string> = {
  newPassword: 'новий пароль',
  replayPassword: 'повторіть пароль',
};

const RestoreLebels: Record<keyof Restore, string> = {
  restorePassword: 'емаіл',
};

const RegisterLabels: Record<keyof Register, string> = {
  login: 'логін',
  password: 'пароль',
  returnPassword: 'повторіть пароль',
  email: 'емаіл',
  mobile: 'телефон',
};

export const configForm = {
  userProfile: {
    surname: '',
    name: '',
    family: '',
    city: '',
    street: '',
    house: '',
    flat: '',
  } as UserForm,
  userTariffs: {
    electricity: '',
    water: '',
    gas: '',
    tube: '',
    trash: '',
    flatWall: '',
  } as UserTariffs,
  authForm: {
    login: '',
    password: '',
  } as Auth,
  fogot: {
    newPassword: '',
    replayPassword: '',
  } as FogotPassword,
  restore: {
    restorePassword: '',
  } as Restore,
  register: {
    login: '',
    password: '',
    returnPassword: '',
    email: '',
    mobile: '',
  } as Register,
  meter: {
    electricity: '',
    water: '',
    gas: '',
  } as Meter,
};

export const getFields = <T extends Record<string, any>>(
  data: T,
  labels: Record<keyof T, string>,
  types?: Partial<Record<keyof T, string | number>>,
): FormField[] =>
  (Object.keys(data) as (keyof T)[]).map(key => ({
    name: key as string,
    label: labels[key],
    value: data[key],
    type: types?.[key],
    error: false,
  }));

export const profileFields = getFields(configForm.userProfile, userProfileLabels);
export const tariffsFields = getFields(configForm.userTariffs, userTariffsLabels);
export const AuthFields = getFields(configForm.authForm, AuthLebels, authTypes);
export const FogotFields = getFields(configForm.fogot, FogotPasswordLabels, resetTypes);
export const RestoreFields = getFields(configForm.restore, RestoreLebels);
export const RegisterFields = getFields(configForm.register, RegisterLabels, registerTypes);
export const MeterFields = getFields(configForm.meter, MeterLabels);
