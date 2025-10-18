import { createTheme } from '@mui/material/styles';

import components from './options/components';
import palette from './options/palette';

const theme = createTheme({
  palette,
  components,
});

export default theme;
