import { EpisodePreviewFragment } from "apollo/generated/graphql";
import { Group, Text, createStyles, Paper } from "@mantine/core";
import { ArrowRight } from "phosphor-react";
import Link from "components/shared/Link";

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
  episode: EpisodePreviewFragment | null;
};

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  const { classes } = useStyles();

  return (
    <Link href={`/episodes/${episode?.id}`}>
      <Paper className={classes.episode} withBorder>
        <Group>
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {episode?.name}
            </Text>

            <Text color="dimmed" size="xs">
              {episode?.episode} - {episode?.air_date}
            </Text>
          </div>

          <ArrowRight />
        </Group>
      </Paper>
    </Link>
  );
};

export default EpisodeCard;
