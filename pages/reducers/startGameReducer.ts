export enum TOGGLE {
  THEME = "TOGGLE_THEME",
  PLAYERS = "TOGGLE_PLAYERS",
  GRID_SIZE = "TOGGLE_GRID_SIZE",
}

type State = {
  theme: {
    numbers: boolean;
    icons: boolean;
  };
  players: {
    one: boolean;
    two: boolean;
    three: boolean;
    four: boolean;
  };
  gridSize: {
    size4x4: boolean;
    size6x6: boolean;
  };
};

export type Action =
  | { type: TOGGLE.THEME }
  | { type: TOGGLE.PLAYERS; payload: string }
  | { type: TOGGLE.GRID_SIZE };

export const startGameReducer = (state: State, action: Action): State => {
  const { theme, players, gridSize } = state;

  switch (action.type) {
    case TOGGLE.THEME:
      return {
        theme: {
          numbers: !theme.numbers,
          icons: !theme.icons,
        },
        players,
        gridSize,
      };
    case TOGGLE.PLAYERS:
      switch (action.payload) {
        case "one":
          return {
            theme,
            players: {
              one: true,
              two: false,
              three: false,
              four: false,
            },
            gridSize,
          };
        case "two":
          return {
            theme,
            players: {
              one: false,
              two: true,
              three: false,
              four: false,
            },
            gridSize,
          };
        case "three":
          return {
            theme,
            players: {
              one: false,
              two: false,
              three: true,
              four: false,
            },
            gridSize,
          };
        case "four":
          return {
            theme,
            players: {
              one: false,
              two: false,
              three: false,
              four: true,
            },
            gridSize,
          };
      }
    case TOGGLE.GRID_SIZE:
      return {
        theme,
        players,
        gridSize: {
          size4x4: !gridSize.size4x4,
          size6x6: !gridSize.size6x6,
        },
      };
    default:
      return { ...state };
  }
};
