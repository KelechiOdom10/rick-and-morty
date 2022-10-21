import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render } from "@testing-library/react";

export type MockResponse = MockedResponse<Record<string, any>>[];

type ProviderOptions = {
  mocks: MockResponse;
  addTypeName?: boolean;
};

// Utility function that returns Graphql Mock provider that wraps component for testing purposes
export function renderWithMockProvider(
  ui: React.ReactElement,
  { mocks, addTypeName = false }: ProviderOptions
) {
  const { rerender, ...result } = render(
    <MockedProvider mocks={mocks} addTypename={addTypeName}>
      {ui}
    </MockedProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <MockedProvider mocks={mocks} addTypename={addTypeName}>
          {rerenderUi}
        </MockedProvider>
      ),
  };
}

// Utility function that returns mock provider for writing unit tests for custom hooks
export function createWrapper({ mocks, addTypeName = true }: ProviderOptions) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <MockedProvider mocks={mocks} addTypename={addTypeName}>
      {children}
    </MockedProvider>
  );
}
