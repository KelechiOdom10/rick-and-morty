import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "apollo/**/*.ts",
  generates: {
    "apollo/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
    "apollo/generated/introspection.json": {
      plugins: ["introspection"],
    },
    "apollo/generated/fragment-matcher.ts": {
      plugins: ["fragment-matcher"],
    },
  },
};

export default config;
