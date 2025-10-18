declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tabs: {
      yellow: string;
      blue: string;
      red: string;
    };
    input: {
      default: string;
      yellow: string;
      blue: string;
      red: string;
      errorFill: string;
    };
    button: {
      auth: string;
      profile: string;
      save: string;
    };
    lamp: {
      primary: string;
      secondary: string;
    };
    status: {
      errorText: string;
      errorInput: string;
    };
    bgAuth: string;
  }
}

const palette = {
  background: {
    default: '#fff',
  },
  tabs: {
    yellow: '#f8fb4f',
    blue: '#4f9ffb',
    red: '#d63636',
  },
  input: {
    default: '#eee',
    yellow: 'rgba(224, 241, 33, 0.54)',
    blue: 'rgba(79, 129, 239, 0.54)',
    red: 'rgba(241, 62, 17, 0.54)',
    errorFill: '#ff7373',
  },
  button: {
    auth: '#379683',
    profile: '#bfe9a3',
    save: '#8de739',
  },
  lamp: {
    primary: '#ff4405',
    secondary: '#b9fa50',
  },
  status: {
    errorText: '#ff4a4a',
    errorInput: '#ff7373',
  },
  text: {
    main: '#edf5e1',
    secondary: '#fff',
  },
  bgAuth: '#8ee4af',
};

export default palette;
