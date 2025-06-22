import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Game {
  id: number;
  key: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: { id: number; name: string; slug: string } }[];
  metacritic: number;
  rating_top: number;
}

interface GamePage {
  results: Game[];
  key: string;
}

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery) as {
    data: any;
    error: any;
    isLoading: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
  };
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page: GamePage, index: number) => (
          <React.Fragment key={index}>
            {page.results.map((game: Game) => {
              return (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              );
            })}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? `Loading...` : `Load More`}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
