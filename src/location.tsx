import { memo, useEffect, useState } from 'react';
import { historyController } from './history-controller';

interface LocationProps {
    children: (location: Location) => JSX.Element;
}

export const Location = memo<LocationProps>(({ children }) => {
    const location = useLocation();
    return children(location);
});

export function useLocation() {
    const [location, setLocation] = useState<Location>(window.location);
    useEffect(() => {
        historyController.subscribe(setLocation);
        return historyController.unsubscribe(setLocation);
    }, [historyController, setLocation]);

    return location;
}
