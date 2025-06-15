import { useState } from "react";
import PostListPaging from "./components/PostListPaging";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return <PostListPaging />;
  // return <PostList></PostList>;
  // return <ToDoList></ToDoList>;

  // return (
  //   <Grid
  //     templateAreas={{
  //       base: `"nav" "main"`,
  //       lg: `"nav nav" "aside main"`,
  //     }}
  //     templateColumns={{
  //       base: '1fr',
  //       lg: '250px 1fr'
  //     }}
  //   >
  //     <GridItem area="nav">
  //       <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
  //     </GridItem>
  //     <Show above="lg">
  //       <GridItem area="aside" paddingX={5}>
  //         <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
  //       </GridItem>
  //     </Show>
  //     <GridItem area="main">
  //       <Box paddingLeft={2}>
  //         <GameHeading gameQuery={gameQuery} />
  //         <Flex marginBottom={5}>
  //           <Box marginRight={5}>
  //             <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } />
  //           </Box>
  //           <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
  //         </Flex>
  //       </Box>
  //       <GameGrid gameQuery={gameQuery} />
  //     </GridItem>
  //   </Grid>
  // );
}

export default App;
