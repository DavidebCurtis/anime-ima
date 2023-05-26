import {
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Badge,
  Text,
  Tag,
  PopoverFooter,
  Heading,
} from '@chakra-ui/react';
import { Media } from '../hooks/getAnime';

interface Props {
  children: React.ReactNode;
  anime: Media;
}

const CardPopover = ({ children, anime }: Props) => {
  const Format = (format: string) => {
    if (format === 'MOVIE') {
      return format.charAt(0).toUpperCase() + format.slice(1).toLowerCase();
    }
    if (format === 'TV') {
      return format + ' Show';
    } else {
      return format;
    }
  };
  return (
    <Popover trigger='hover' gutter={20} placement={'right'}>
      <PopoverTrigger>{children}</PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />

        <PopoverBody>
          <>
            <Heading as='h2' size='md'>
              {anime.season.charAt(0).toUpperCase() +
                anime.season.slice(1).toLowerCase() +
                ' ' +
                anime.seasonYear}
            </Heading>
            <Text
              mb={'6px'}
              as='b'
              color={`${anime.coverImage.color}`}
              fontSize='sm'
            >
              {anime.studios.edges?.map((edge) => {
                return `${edge.node.name}`;
              })}
            </Text>
            <Text mb={'10px'} fontSize='sm'>
              {/* {anime.format.charAt(0).toUpperCase() +
                anime.format.slice(1).toLowerCase()} */}
              {Format(anime.format)}
            </Text>
            <Text
              fontSize='sm'
              mb={'10px'}
              dangerouslySetInnerHTML={{ __html: anime.description }}
            />
            {anime.genres?.map((genre) => (
              <Tag
                bg={`${anime.coverImage.color}`}
                mb={'100px'}
                padding={'5px'}
                margin={'5px'}
                key={genre}
              >
                <Text mixBlendMode={'difference'}>{genre}</Text>
              </Tag>
            ))}
          </>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CardPopover;