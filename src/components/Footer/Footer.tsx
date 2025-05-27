import { Box, Text, useMantineColorScheme, useMantineTheme, Flex } from '@mantine/core';

export function Footer() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Box
      component="footer"
      px="xl"
      py="md"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor:
          colorScheme === 'dark'
            ? theme.colors.severanceRed[4]
            : theme.colors.severanceGreen[4],
        padding: "8px",
        textAlign: "center",
      }}
    >
      <Flex justify="center" align="center">
        <Text
          fw={500}
          fz="sm"
          c={colorScheme === 'dark' ? 'black' : 'white'}
        >
          © {new Date().getFullYear()} Desenvolvido por pixies0
        </Text>
      </Flex>
    </Box>
  );
}
