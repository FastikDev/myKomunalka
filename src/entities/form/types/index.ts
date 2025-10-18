export type UserForm = {
  avatar: string;
  surname: string;
  name: string;
  family: string;
  city: string;
  street: string;
  house: number | string;
  flat: number | string;
};

export type UserTariffs = {
  electricity: number | string;
  water: number | string;
  gas: number | string;
  tube: number | string;
  trash: number | string;
  flatWall: number | string;
};

export type FormField = {
  name: string;
  label: string;
  value: string | number;
  type?: string | number;
  placeholder?: string;
  error?: boolean;
};

export type Auth = {
  login: string;
  password: string;
};

export type FogotPassword = {
  newPassword: string;
  replayPassword: string;
};

export type Restore = {
  restorePassword: string;
};

export type Register = Auth & {
  returnPassword: string;
  email: string;
  mobile: string | number;
};

export type Meter = {
  electricity: number | string;
  water: number | string;
  gas: number | string;
};
