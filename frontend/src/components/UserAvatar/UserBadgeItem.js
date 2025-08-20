import { Box, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      fontSize={12}
      bg="#a3cfff"
      cursor="pointer"
      onClick={handleFunction}
      _hover={{ bg: "#8ec4ff" }}
    >
      <Flex align="center" gap={1}>
        <Text>{user.name}</Text>
        <CloseIcon boxSize={2.5} />
      </Flex>
    </Box>
  );
};

export default UserBadgeItem;
