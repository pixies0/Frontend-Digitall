import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Notifications } from '@mantine/notifications';

import '@mantine/notifications/styles.css';
import "@mantine/core/styles.css";

import { AppRouter } from "./routes/Router";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      <AppRouter />
    </MantineProvider>
  );
}
