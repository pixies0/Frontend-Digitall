import { MantineProvider } from '@mantine/core';
import { LoginPage } from './pages/Login';

import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider>
      <LoginPage />
    </MantineProvider>
  );
}
