const components = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        '.MuiInputBase-input': {
          padding: 8,
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              padding: 4,
              '&.Mui-checked': {
                color: '#3f5bff',
              },
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              boxShadow: 'none',
              padding: '16px',
              minWidth: 'auto',
              height: 'fit-content',
              '&:hover': {
                boxShadow: 'none',
              },
            },
          },
        },
      },
    },
  },
};

export default components;
