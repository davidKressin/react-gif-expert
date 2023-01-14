import { useFetchGifs } from "../hooks/useFetchGifs";
import { GIfItem } from "./GIfItem";


export const GifGrid = ( {category} ) => {
    const {images, isLoading} = useFetchGifs(category);

    console.log({images, isLoading});

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&(<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {images.map((image)=>(
                <GIfItem  
                    key={image.id} 
                    {...image}
                    />
                ))}
            </div>
        </>

    )
}
