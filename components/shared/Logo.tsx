import { Image, ImageProps } from "@mantine/core";

const Logo: React.FC<ImageProps> = props => {
  return <Image src="/logo.svg" alt="Rick and Morty logo" {...props} />;
};

export default Logo;
