import React,{useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs({ params }) {
  const {keyword} = params;
  const [gifs, updateValue] = useState([]);
  const [loading, updateLoading] = useState(false);

    useEffect(
      function () {
        updateLoading(true);
        getGifs({ keyword }).then((gifs) => 
          updateValue(gifs),
          updateLoading(false)
        );
      },
      [keyword]
    );
    
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
        <div>
            {gifs.map(gif => (
                <Gif
                    key={gif.id}
                    id={gif.id}
                    url={gif.url}
                    title={gif.title}
                />
            ))}
        </div>
    );
}