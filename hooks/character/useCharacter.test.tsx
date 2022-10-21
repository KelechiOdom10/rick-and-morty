import "@testing-library/jest-dom";
import { waitFor, renderHook } from "@testing-library/react";
import {
  Character,
  GetCharacterQueryVariables,
} from "apollo/generated/graphql";
import { GET_CHARACTER_QUERY } from "apollo/queries/character";
import { createWrapper, MockResponse } from "utils/testUtils";
import useCharacter from "./useCharacter";

describe("Ensure useCharacter hook works as expected", () => {
  const characterId: string = "1";
  const characterQueryMock: MockResponse = [
    {
      request: {
        query: GET_CHARACTER_QUERY,
        variables: {
          characterId,
        } as GetCharacterQueryVariables,
      },
      result: {
        data: {
          character: {
            __typename: "Character",
            id: characterId,
            name: "Rick Sanchez",
            gender: "Male",
            image: null,
            species: null,
            status: "ALIVE",
            location: {
              __typename: "Location",
              name: "Earth",
              dimension: "Brrr",
              residents: [null],
              id: "2",
              type: "Mad",
            },
            origin: null,
            episode: [null],
          } as Character,
        },
      },
    },
  ];

  const characterQueryErrorMock: MockResponse = [
    {
      request: {
        query: GET_CHARACTER_QUERY,
        variables: {
          characterId,
        },
      },
      error: new Error("Ohh ohh!"),
    },
  ];

  test("Successfully fetches individual character when id is passed through", async () => {
    const { result } = renderHook(() => useCharacter({ characterId }), {
      wrapper: createWrapper({ mocks: characterQueryMock }),
    });

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBeUndefined();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data?.character?.name).toEqual("Rick Sanchez");
    expect(result.current.data?.character?.location?.name).toEqual("Earth");
  });

  test("Hook Successfully errors returns error when API request is sent with page that doesn't exist", async () => {
    const { result } = renderHook(() => useCharacter({ characterId }), {
      wrapper: createWrapper({ mocks: characterQueryErrorMock }),
    });

    await waitFor(() =>
      expect(result.current.error?.message).toEqual("Ohh ohh!")
    );

    expect(result.current.error).toBeDefined();
  });
});
