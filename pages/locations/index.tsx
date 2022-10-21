import { addApolloState, initializeApollo } from "apollo/client";
import { GetLocationsQuery } from "apollo/generated/graphql";
import { GET_LOCATIONS_QUERY } from "apollo/queries/location";
import LocationList from "components/location/LocationList";

const LocationsPage = () => {
  return <LocationList />;
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetLocationsQuery>({
      query: GET_LOCATIONS_QUERY,
    });

    return addApolloState(apolloClient, {
      props: {},
      revalidate: 1,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default LocationsPage;
