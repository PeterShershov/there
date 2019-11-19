import { MyEventEmitter } from './event-emitter';

export const historyController = {
    historySubscriber: new MyEventEmitter<Location>(),
    subscribe(callback: (location: Location) => void) {
        this.historySubscriber.subscribe(callback);
    },
    unsubscribe(callback: (location: Location) => void) {
        this.historySubscriber.unsubscribe(callback);
    },
    push(url: string, state: Record<string, unknown> = {}, title: string = '') {
        history.pushState(state, title, url);
        this.historySubscriber.emit(window.location);
    },
    replace(url: string, state: Record<string, unknown> = {}, title: string = '') {
        history.replaceState(state, title, url);
        this.historySubscriber.emit(window.location);
    }
};
