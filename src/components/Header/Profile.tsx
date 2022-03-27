import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Jerônimo</Text>
        <Text color="gray.300" fontSize="small">
          gustavo.jeronimo@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gustavo Jerônimo"
        src="https://github.com/gjmoura.png"
      />
    </Flex>
  );
}
