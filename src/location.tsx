import { memo, useEffect, useState } from 'react';
import { HistoryController } from './history-controller';

export const Location = memo<{ render: (location: Location) => JSX.Element }>(({ render }) => {
	const location = useLocation();
	return render(location);
});

export function useLocation() {
	const [location, setLocation] = useState<Location>(window.location);

	useEffect(() => {
		HistoryController.subscribe(setLocation);

		return HistoryController.unsubscribe(setLocation);
	}, [HistoryController, setLocation]);

	return location;
}
