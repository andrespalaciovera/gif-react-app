import PropTypes from 'prop-types';
import {GifCard} from './GifCard';
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className='card-grid'>
        {images.map(({id, title, url})=> (
          <GifCard key={id} title={title} url={url}/>
        )
        )}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}