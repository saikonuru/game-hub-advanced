import { useReducer } from "react";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducer/tasksReducer";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
  // return <PostListInfPaging />;
  // return <PostListPaging />;
  // return <PostList></PostList>;
  // return <ToDoList></ToDoList>;
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // return (
  //   <Grid
  //     templateAreas={{
  //       base: `"nav" "main"`,
  //       lg: `"nav nav" "aside main"`,
  //     }}
  //     templateColumns={{
  //       base: "1fr",
  //       lg: "250px 1fr",
  //     }}
  //   >
  //     <GridItem area="nav">
  //       <NavBar
  //         onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
  //       />
  //     </GridItem>
  //     <Show above="lg">
  //       <GridItem area="aside" paddingX={5}>
  //         <GenreList
  //           selectedGenreId={gameQuery.genreId}
  //           onSelectGenre={(genre) =>
  //             setGameQuery({ ...gameQuery, genreId: genre.id })
  //           }
  //         />
  //       </GridItem>
  //     </Show>
  //     <GridItem area="main">
  //       <Box paddingLeft={2}>
  //         <GameHeading gameQuery={gameQuery} />
  //         <Flex marginBottom={5}>
  //           <Box marginRight={5}>
  //             <PlatformSelector
  //               selectedPlatformId={gameQuery.platformId}
  //               onSelectPlatform={(platform) =>
  //                 setGameQuery({ ...gameQuery, platformId: platform.id })
  //               }
  //             />
  //           </Box>
  //           <SortSelector
  //             sortOrder={gameQuery.sortOrder}
  //             onSelectSortOrder={(sortOrder) =>
  //               setGameQuery({ ...gameQuery, sortOrder })
  //             }
  //           />
  //         </Flex>
  //       </Box>
  //       <GameGrid gameQuery={gameQuery} />
  //     </GridItem>
  //   </Grid>
  // );
}

export default App;
