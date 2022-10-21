import type { NextPage } from "next";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Grid,
  Overlay,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";
import Link from "components/shared/Link";

const PRIMARY_COL_HEIGHT = 300;

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <div>
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Box
          component={Link}
          sx={{ position: "relative", textDecoration: "none" }}
          href="/characters"
        >
          <BackgroundImage
            src="/images/characters.jpeg"
            sx={{ height: PRIMARY_COL_HEIGHT }}
            radius="sm"
          >
            <Overlay
              opacity={0.5}
              gradient="linear-gradient(to right top, rgba(0, 0, 0, 0.9) 50%, transparent)"
              zIndex={5}
            />
            <Center sx={{ height: "100%" }} p="md">
              <Button variant="white" sx={{ zIndex: 99, color: "black" }}>
                Characters
              </Button>
            </Center>
          </BackgroundImage>
        </Box>
        <Grid gutter="md">
          <Grid.Col>
            <Box
              component={Link}
              sx={{ position: "relative", textDecoration: "none" }}
              href="/episodes"
            >
              <BackgroundImage
                src="/images/episodes.webp"
                sx={{ height: SECONDARY_COL_HEIGHT }}
                radius="sm"
              >
                <Center sx={{ height: "100%" }} p="md">
                  <Button variant="white" sx={{ zIndex: 99, color: "black" }}>
                    Episodes
                  </Button>
                </Center>
              </BackgroundImage>
              <Overlay opacity={0.5} color="#000" zIndex={5} />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box
              component={Link}
              sx={{ position: "relative", textDecoration: "none" }}
              href="/locations"
            >
              <BackgroundImage
                src="/images/locations.jpeg"
                sx={{ height: SECONDARY_COL_HEIGHT }}
                radius="sm"
              >
                <Center sx={{ height: "100%" }} p="md">
                  <Button variant="white" sx={{ zIndex: 99, color: "black" }}>
                    Locations
                  </Button>
                </Center>
              </BackgroundImage>
              <Overlay opacity={0.5} color="#000" zIndex={5} />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box sx={{ position: "relative" }}>
              <BackgroundImage
                src="/images/jerry.jpeg"
                sx={{ height: SECONDARY_COL_HEIGHT }}
                radius="sm"
              />
            </Box>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </div>
  );
};

export default Home;
