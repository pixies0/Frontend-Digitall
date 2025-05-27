import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { LoginPage } from './pages/Login';
import { theme } from './theme';

import '@mantine/core/styles.css';

export default function App() {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider
        theme={theme}
        defaultColorScheme="light"
      >
        <LoginPage />
      </MantineProvider>
    </>
  );
}
