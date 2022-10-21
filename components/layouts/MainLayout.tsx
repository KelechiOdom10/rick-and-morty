import {
  createStyles,
  Navbar,
  Group,
  AppShell,
  Container,
  Header,
  Burger,
  MediaQuery,
} from "@mantine/core";
import Logo from "../shared/Logo";
import {
  FinnTheHuman,
  GithubLogo,
  NavigationArrow,
  ProjectorScreenChart,
} from "phosphor-react";
import { useRouter } from "next/router";
import Link from "../shared/Link";
import { useState } from "react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      alignItems: "center",
      marginBottom: theme.spacing.md * 1.5,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      marginRight: theme.spacing.xl,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors.dark[6],
        color: "#8bc863",
        [`& .${icon}`]: {
          color: "#bfde42",
        },
      },
    },
  };
});

const data = [
  { link: "/characters", label: "Characters", icon: FinnTheHuman },
  { link: "/episodes", label: "Episodes", icon: ProjectorScreenChart },
  { link: "/locations", label: "Locations", icon: NavigationArrow },
];

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const links = data.map(item => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: router.asPath.includes(item.link),
      })}
      href={item.link}
      onClick={() => setOpened(false)}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} size={24} color="#ffd170" />
      <span>{item.label}</span>
    </Link>
  ));

  const navbar = (
    <Navbar
      // height={"100%"}
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 300 }}
      p="md"
    >
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer} p={0}>
        <Link
          href="https://github.com/KelechiOdom10"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <GithubLogo
            className={classes.linkIcon}
            size={32}
            color="#ffd170"
            weight="thin"
          />
          <span>Made by a legend </span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );

  const header = (
    <Header height={80}>
      <Group className={classes.header} position="apart">
        <Link href="/">
          <Logo width={200} px={16} py={8} />
        </Link>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(o => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
      </Group>
    </Header>
  );

  return (
    <AppShell navbarOffsetBreakpoint="sm" navbar={navbar} header={header}>
      <Container size={1280} p={24}>
        {children}
      </Container>
    </AppShell>
  );
};

export default MainLayout;
