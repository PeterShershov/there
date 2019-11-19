import { MyEventEmitter } from '../src/event-emitter';
import { historyController } from '../src/history-controller';

const historay: string[] = [];

export const MockHistoryController: typeof historyController = {
    historySubscriber: new MyEventEmitter<Location>(),
    subscribe(callback: (location: Location) => void) {
        this.historySubscriber.subscribe(callback);
    },
    unsubscribe(callback: (location: Location) => void) {
        this.historySubscriber.unsubscribe(callback);
    },
    push(url: string) {
        historay.push(url);
        Object.defineProperty(window, 'location', {
            value: {
                href: historay.join()
            }
        });
        this.historySubscriber.emit(window.location);
    },
    replace(url: string) {
        historay.pop();
        historay.push(url);
        Object.defineProperty(window, 'location', {
            value: {
                href: historay.join()
            }
        });
        this.historySubscriber.emit(window.location);
    }
};
