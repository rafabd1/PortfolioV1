import { extendTheme} from '@chakra-ui/react';
import colors from './colors';
import components from './components';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors,
});

export default theme;
