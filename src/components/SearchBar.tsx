import { ChangeEvent, useContext, useRef, useEffect } from 'react';
import { SearchResults } from '.';
import { PlacesContext } from '../context';


export const SearchBar = () => {

    const { searchPlacesByTerm } = useContext( PlacesContext );

    const debounceRef = useRef<NodeJS.Timeout>();

    // const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        const onQueryChanged = ( value: string ) => {
        if ( debounceRef.current )
            clearTimeout( debounceRef.current );

        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm( value );
        }, 350 );
    }

    useEffect(() => {

        setTimeout(() =>  {
            onQueryChanged('prueba')
        },2000)

    }, [])

    return (
        <div className="search-container">
            <input 
                type="text" 
                className="form-control"
                placeholder="Lista de contenedores"
                disabled
                // onChange={ onQueryChanged }
            />

            <SearchResults />
        </div>
    )
}
