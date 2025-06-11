import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useState } from 'react';
import { Box } from '@mui/system';


const images = [
  'https://picsum.photos/id/1018/600/300',
  'https://picsum.photos/id/1015/600/300',
  'https://picsum.photos/id/1019/600/300',
];

const card = [
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'A woman explores parallel lives through a mystical library between life and death.',
    image: 'https://covers.openlibrary.org/b/id/11032775-L.jpg',
  },
  {
    title: 'Circe',
    author: 'Madeline Miller',
    description: 'A powerful retelling of the Greek goddess Circe and her path to independence.',
    image: 'https://covers.openlibrary.org/b/id/8937694-L.jpg',
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'An astronaut with amnesia must save Earth with the help of an unexpected ally.',
    image: 'https://covers.openlibrary.org/b/id/11032775-L.jpg',
  },
  {
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    description: 'A surreal journey through parallel realities and magical realism.',
    image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    description: 'A girl in Nazi Germany finds hope and purpose by stealing and sharing books.',
    image: 'https://covers.openlibrary.org/b/id/10420559-L.jpg',
  },
];
export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? card.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === card.length - 1 ? 0 : prev + 1));
  };

  return (
    // <div className="relative w-1/3 max-w-xl mx-auto">
    //   {/* <img
    //     src={images[currentIndex]}
    //     alt="slide"
    //     className="w-auto rounded-lg object-cover"
    //   /> */}

    //   <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
    //     {/* <button onClick={prevSlide} className="bg-white px-2 py-1 rounded shadow">
    //       ‹
    //     </button> */}
    //     <IconButton onClick={prevSlide} aria-label="previous">
    //       <SkipPreviousIcon />
    //     </IconButton>

    //   </div>
    //   <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
    //     {/* <button onClick={nextSlide} className="bg-white px-2 py-1 rounded shadow">
    //       ›
    //     </button> */}
    //     <IconButton onClick={nextSlide} aria-label="next">
    //       <SkipNextIcon />
    //     </IconButton>
    //   </div>
    // </div>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <IconButton onClick={prevSlide} aria-label="previous">
        <SkipPreviousIcon />
      </IconButton>

      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Book of The Week
            </Typography>
            <h2>{card[currentIndex].title}</h2><br />
            <h3>{card[currentIndex].author}</h3><br />
            <h3>{card[currentIndex].description}</h3>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={card[currentIndex].image}
          alt="Live from space album cover"
        />
      </Card>
      <IconButton onClick={nextSlide} aria-label="next">
        <SkipNextIcon />
      </IconButton>
    </Box>


  );
}
{/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <IconButton onClick={prevSlide} aria-label="previous">
    <SkipPreviousIcon />
  </IconButton>

<Card sx={{ display: 'flex' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography component="div" variant="h5">
        Book of The Week
      </Typography>
      <h2>{card[currentIndex].title}</h2><br/>
      <h3>{card[currentIndex].author}</h3><br/>
      <h3>{card[currentIndex].description}</h3>
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: 151 }}
    image={card[currentIndex].image}
    alt="Live from space album cover"
  />
</Card>
<IconButton onClick={nextSlide} aria-label="next">
    <SkipNextIcon />
  </IconButton>
</Box> */}
