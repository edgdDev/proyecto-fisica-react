import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './screens';

import './styles.scss';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    )
}
