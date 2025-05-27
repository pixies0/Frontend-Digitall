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
        size="lg"
        aria-label="Alternar tema"
        color={computedColorScheme === 'light' ? 'severanceGreen' : 'severanceRed'}
      >
        {computedColorScheme === 'light' ? <Plug size={25} color='white'/> : <Unplug size={25} color='black'/>}
      </ActionIcon>
    </Tooltip>
  );
};
