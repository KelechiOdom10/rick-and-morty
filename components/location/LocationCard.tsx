import { createStyles, Group, Paper, Text } from "@mantine/core";
import { LocationPreviewFragment } from "apollo/generated/graphql";
import Link from "components/shared/Link";
import { ArrowRight } from "phosphor-react";

const useStyles = createStyles(theme => ({
  episode: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    cursor: "pointer",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

type Props = {
  location: LocationPreviewFragment | null;
};

const LocationCard: React.FC<Props> = ({ location }) => {
  const { classes } = useStyles();

  return (
    <Link href={`/locations/${location?.id}`}>
      <Paper className={classes.episode} withBorder>
        <Group>
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {location?.name}
            </Text>

            <Text color="dimmed" size="xs">
              {location?.dimension} - {location?.type}
            </Text>
          </div>

          <ArrowRight />
        </Group>
      </Paper>
    </Link>
  );
};

export default LocationCard;
