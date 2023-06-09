import { extendTheme} from '@chakra-ui/react';
import colors from './colors';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    text: 'Inter'
  },
  config,
  colors,
});

export default theme;
