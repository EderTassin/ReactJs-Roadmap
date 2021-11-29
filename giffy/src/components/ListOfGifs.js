import React,{useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs({ keyword }) {

  const [gifs, updateValue] = useState([]);

    useEffect(
      function () {
        getGifs({ keyword }).then((gifs) => updateValue(gifs));
      },
      [keyword]
    );

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