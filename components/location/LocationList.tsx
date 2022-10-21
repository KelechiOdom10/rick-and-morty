import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@mantine/core";
import { GetLocationsQuery } from "apollo/generated/graphql";
import { GET_LOCATIONS_QUERY } from "apollo/queries/location";
import LocationCard from "./LocationCard";

const LocationList = () => {
  const { data } = useQuery<GetLocationsQuery>(GET_LOCATIONS_QUERY);

  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {data &&
        data.locations?.results?.map((location, index) => (
          <LocationCard location={location} key={index} />
        ))}
    </SimpleGrid>
  );
};

export default LocationList;
