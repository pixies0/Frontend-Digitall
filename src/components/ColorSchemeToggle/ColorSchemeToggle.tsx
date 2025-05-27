import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Tooltip } from '@mantine/core';
import { Plug, Unplug } from 'lucide-react';

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Tooltip label={`${computedColorScheme === 'light' ? 'innie' : 'outtie'}`}>
      <ActionIcon
        onClick={toggleColorScheme}
        variant="outline"
        size="lg"
        aria-label="Alternar tema"
      >
        {computedColorScheme === 'light' ? <Plug size={25} /> : <Unplug size={25} />}
      </ActionIcon>
    </Tooltip>
  );
};
