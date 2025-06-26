import LoginStatus from "./state-management/LoginStatus";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  return (
    <>
      <LoginStatus />
    </>
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
