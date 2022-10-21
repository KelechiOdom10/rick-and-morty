import { HTMLProps } from "react";
import NextLink, { LinkProps } from "next/link";

const Link: React.FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  children,
  ...props
}) => {
  return (
    <NextLink
      as={as}
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
    >
      <a style={{ textDecoration: "none" }} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
