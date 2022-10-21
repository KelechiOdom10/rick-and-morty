import { Container, Loader, Stack, Title } from "@mantine/core";

const Loading = () => {
  return (
    <Container>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
        }}
        spacing={12}
        pt={80}
        align="center"
        mx="auto"
      >
        <Loader color="dark" variant="bars" />
        <Title order={4}>Loading</Title>
      </Stack>
    </Container>
  );
};

export default Loading;
