import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  colors: {
    light: {
      bg: '#FFFFFF',
      text: '#000000',
      // outras cores para o tema light
    },
    dark: {
      bg: '#000000',
      text: '#FFFFFF',
      // outras cores para o tema dark
    },
  },
  components: {
    Box: {
      baseStyle: {
        bg: 'light.bg',
        color: 'light.text',
      },
    },
    // outros componentes e suas configurações
  },
  // outras configurações de estilo
});

export default theme;
