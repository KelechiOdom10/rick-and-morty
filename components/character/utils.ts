export const getStatusColor = (status: string) => {
  switch (status) {
    case "ALIVE":
      return "green";
    case "DEAD":
      return "pink";
    case "UNKNOWN":
      return "yellow";
    default:
      return "gray";
  }
};
