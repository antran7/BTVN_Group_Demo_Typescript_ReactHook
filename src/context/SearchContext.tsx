import { createContext, useReducer, ReactNode } from "react";

// Define types for the state and actions
interface SearchState {
  currentSearch: string;
  searchHistory: string[];
}

interface SearchAction {
  type: "ADD_SEARCH" | "ADD_TO_HISTORY";
  payload: string;
}

const initialState: SearchState = {
  currentSearch: "",
  searchHistory: [],
};

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case "ADD_SEARCH":
      return { ...state, currentSearch: action.payload };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Define the SearchContext type to use with createContext
interface SearchContextType {
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
}

// Create the context with the correct types
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

// Define types for the SearchProvider component props
interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}