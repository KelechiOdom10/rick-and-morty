import { useQuery } from "@apollo/client";
import { Box, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import {
  GetLocationQuery,
  GetLocationQueryVariables,
} from "apollo/generated/graphql";
import { GET_LOCATION_QUERY } from "apollo/queries/location";
import CharacterCard from "components/character/CharacterCard";

const LocationDetail = ({ locationId }: { locationId: string }) => {
  const { data } = useQuery<GetLocationQuery, GetLocationQueryVariables>(
    GET_LOCATION_QUERY,
    { variables: { locationId } }
  );
  if (data?.location) {
    const { location } = data;
    return (
      <Box>
        <Box
          sx={t => ({
            backgroundColor: t.colors.dark[6],
            borderRadius: t.radius.md,
          })}
          p={24}
          mb={12}
        >
          <Stack>
            <Text weight={500}>{location?.name}</Text>
            <Text size="sm" color="dimmed">
              {location?.dimension} - {location.type}
            </Text>
          </Stack>
        </Box>
        <Box pt={4}>
          <Title order={4} sx={{ lineHeight: 1.2 }} pb={8}>
            Residents
          </Title>
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: 1025, cols: 3, spacing: "md" },
              { maxWidth: 800, cols: 2, spacing: "md" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {location.residents.map(resident => (
              <CharacterCard character={resident} key={resident?.id} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
};

export default LocationDetail;
