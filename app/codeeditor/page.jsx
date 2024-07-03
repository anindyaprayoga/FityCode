import React from "react";
import CodeEditor from "../../components/CodeEditor";
import { Box } from "@chakra-ui/react";

const page = () => {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
};

export default page;
