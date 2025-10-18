import { faBoltLightning, faWater, faFire } from '@fortawesome/free-solid-svg-icons';

export const meterConfig = {
  electricity: {
    title: 'Електроенергія',
    icon: faBoltLightning,
    iconColor: '#ffd34b',
    inputPlaceholder: 'Введіть показання',
    inputColor: theme => theme.palette.input.yellow,
    buttonText: 'Готово',
    buttonColor: theme => theme.palette.tabs.yellow,
  },
  water: {
    title: 'Вода',
    icon: faWater,
    iconColor: '#74c0fc',
    inputPlaceholder: 'Введіть показання',
    inputColor: theme => theme.palette.input.blue,
    buttonText: 'Готово',
    buttonColor: theme => theme.palette.tabs.blue,
  },
  gas: {
    title: 'Газ',
    icon: faFire,
    iconColor: '#d80e0e',
    inputPlaceholder: 'Введіть показання',
    inputColor: theme => theme.palette.input.red,
    buttonText: 'Готово',
    buttonColor: theme => theme.palette.tabs.red,
  },
};
