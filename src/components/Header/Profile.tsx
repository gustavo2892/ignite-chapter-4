import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Freitas</Text>
        <Text color="gray.300" fontSize="small">
          gustavo2892@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gustavo Freitas" src="https://github.com/gustavo2892.png" />
    </Flex>
  );
}