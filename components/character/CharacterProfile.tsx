import { Badge, Card, Group, Image, Stack, Text } from "@mantine/core";
import { Character } from "apollo/generated/graphql";
import { getStatusColor } from "./utils";

type Props = {
  character: Character;
};

const CharacterProfile: React.FC<Props> = ({ character }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={character?.image}
          height={250}
          alt={`Image of ${character?.name}`}
        />
      </Card.Section>

      <Stack align="flex-start" mt="md" sx={{ gap: 0 }}>
        <Text weight={500}>{character?.name}</Text>
        <Text size="sm" color="dimmed">
          {character?.species}
        </Text>
      </Stack>

      <Group>
        <Stack align="flex-start" mt="md" sx={{ gap: 0 }}>
          <Text weight={500}>Location</Text>
          <Text size="sm" color="dimmed">
            {character?.location?.name}
          </Text>
        </Stack>
        <Stack align="flex-start" mt="md" sx={{ gap: 0 }}>
          <Text weight={500}>Origin</Text>
          <Text size="sm" color="dimmed">
            {character?.origin?.name}
          </Text>
        </Stack>
      </Group>

      <Badge
        color={getStatusColor(character?.status?.toUpperCase()!)}
        mt="md"
        variant="light"
        sx={{ width: "auto" }}
      >
        {character?.status}
      </Badge>
    </Card>
  );
};

export default CharacterProfile;
