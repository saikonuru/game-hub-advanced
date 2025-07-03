import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { genreId, platformId } = useGameQueryStore((s) => ({
    genreId: s.gameQuery.genreId,
    platformId: s.gameQuery.platformId,
  }));

  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  const heading: string =
    (platform?.name || "") + " " + (genre?.name || "") + " Games";

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
