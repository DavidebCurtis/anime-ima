import { Image, Box, Text, SimpleGrid } from '@chakra-ui/react';
import getAnime from '../hooks/getAnime';
import DisplayCard from './DisplayCard';

const AnimeGrid = () => {
  const { resData, error, isLoading } = getAnime();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {resData && resData && resData.media && (
        <SimpleGrid
          spacingY={{ base: 5, sm: 8, md: 4 }}
          spacingX={{ base: 3, sm: 5, md: 4 }}
          minChildWidth={{ base: '144px', sm: '186px' }}
          padding={{ base: '20px' }}
          pr={{ lg: '100px' }}
        >
          {resData.media.map((anime) => (
            <DisplayCard key={anime.id} anime={anime} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default AnimeGrid;
