import useTrailers from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;
  const firstTrailer = trailers?.results[0];

  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : (
    <h3>No trailers found!</h3>
  );
};

export default GameTrailer;
