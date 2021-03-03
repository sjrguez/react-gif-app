import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifs';


export const GifGrid =   ({category}) => {

    // const [images, setImages] = useState([])

    const { data, loading} = useFetchGifs(category);
    // useEffect(  ()=> {
    //      getGifs(category)
    //         .then(setImages)
    // }, [category])

  

    return (
            
        <>
            <h3> { category } </h3>
            {loading && <p className="animate__animated animate__flash ">Cargando</p> }
            <div className="card-grid">
                    {
                        data.map(img => {
                            return  (
                                <GifGridItem 
                                    key={img.id}
                                    {...img}
                                />

                            )
                        })
                    }
            </div>
        </>
    )
}


export default GifGrid;