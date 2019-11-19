import ReactDOM from 'react-dom';

interface ITestElementAttributes {
    style?: Partial<CSSStyleDeclaration>;
    id?: string;
    className?: string;
}

export function createContainerElement({ style = {}, id = 'test', className }: ITestElementAttributes = {}) {
    const testElement = document.createElement('div');
    testElement.id = id;
    if (className) {
        testElement.classList.add(className);
    }

    for (const [rule, value] of Object.entries(style)) {
        testElement.style.setProperty(rule, value);
    }

    document.body.appendChild(testElement);

    return testElement;
}

export function renderTestElement(component: JSX.Element) {
    const container = createContainerElement();
    ReactDOM.render(component, container);
    return container;
}
