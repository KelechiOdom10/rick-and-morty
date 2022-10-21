import { Card, Group, Badge, Button, Text, Image, Stack } from "@mantine/core";
import { CharacterPreviewFragment } from "apollo/generated/graphql";
import Link from "components/shared/Link";
import { getStatusColor } from "./utils";

type Props = {
  character: CharacterPreviewFragment | null;
  showDetails?: boolean;
};

const CharacterCard: React.FC<Props> = ({ character, showDetails = false }) => {
  return (
    <Link href={`/characters/${character?.id}`}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={character?.image}
            height={showDetails ? 250 : 200}
            alt={`Image of ${character?.name}`}
          />
        </Card.Section>

        <Stack align="flex-start" mt="md" sx={{ gap: 0 }}>
          <Text weight={500}>{character?.name}</Text>
          <Text size="sm" color="dimmed">
            {character?.species}
          </Text>
        </Stack>

        {showDetails && (
          <Group>
            <>
              <Text weight={500}>{character?.name}</Text>
              <Text size="sm" color="dimmed">
                {character?.species}
              </Text>
            </>
            <>
              <Text weight={500}>{character?.name}</Text>
              <Text size="sm" color="dimmed">
                {character?.species}
              </Text>
            </>
          </Group>
        )}

        <Badge
          color={getStatusColor(character?.status?.toUpperCase()!)}
          mt="md"
          variant="light"
          sx={{ width: "auto" }}
        >
          {character?.status}
        </Badge>
      </Card>
    </Link>
  );
};

export default CharacterCard;
