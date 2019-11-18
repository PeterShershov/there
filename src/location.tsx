import { memo, useEffect, useState } from 'react';
import { HistoryController } from './history-controller';

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
        HistoryController.subscribe(setLocation);
        return HistoryController.unsubscribe(setLocation);
    }, [HistoryController, setLocation]);

    return location;
}
