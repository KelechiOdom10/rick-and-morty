import { addApolloState, initializeApollo } from "apollo/client";
import {
  GetLocationQueryVariables,
  GetLocationQuery,
  GetLocationsQuery,
} from "apollo/generated/graphql";
import {
  GET_LOCATIONS_QUERY,
  GET_LOCATION_QUERY,
} from "apollo/queries/location";
import LocationDetail from "components/location/LocationDetail";
import { GetStaticPropsContext } from "next";

const apolloClient = initializeApollo();

const LocationPage = ({ id }: { id: string }) => {
  return <LocationDetail locationId={id} />;
};

export const getStaticPaths = async () => {
  const {
    data: { locations },
  } = await apolloClient.query<GetLocationsQuery>({
    query: GET_LOCATIONS_QUERY,
  });

  const ids = locations?.results?.map(location => location?.id);
  const paths = ids?.map(id => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  try {
    const {
      data: { location },
    } = await apolloClient.query<GetLocationQuery, GetLocationQueryVariables>({
      query: GET_LOCATION_QUERY,
      variables: { locationId: params?.id as string },
    });

    return addApolloState(apolloClient, {
      props: {
        id: location?.id,
      },
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default LocationPage;
