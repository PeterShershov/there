<image>![there logo](https://user-images.githubusercontent.com/16524839/69015206-7b82ba80-099a-11ea-86d8-bd8ad78573af.png)</image>


Simple yet solid solution for managing app's state via URL without covering over the rendering process.

### `Location`

Provides a location object and re-renders a component once URL changes.

#### Component

```tsx
import { Location } from "@pshershov/cocoa";

const MyComponentBasedOnRoute = () => (
	<Location>
		{location => (
			<Employee
				firstName={location.params.firstName}
				lastName={location.params.lastName}
			/>
		)}
	</Location>
);
```

#### Hook

```tsx
import { useLocation } from "@pshershov/cocoa";

const MyComponentBasedOnRoute = () => {
	const {
		params: { id }
	} = useLocation();
	return <MyComponent id={id} />;
};
```

### `Link`

Anchor element that triggers renders across all components that uses `Location`.

#### Component

```tsx
import { Link } from "@pshershov/cocoa";

const MyComponentWithALink = () => {
	return (
		<Link
			to="/employee"
			params={{
				firstName: "Kevin",
				lastName: "Malone"
			}}
			replace={true}
		>SHOW ME KEVIN<Link />
	);
};
```

#### Hook

Redirects to specific path every time / once the component renders

#### Programatically

```tsx
import { link } from "@pshershov/cocoa";

const handleButtonClick = () =>
	link(
		"/employee",
		{
			firstName: "Kevin",
			lastName: "Malone"
		},
		true
	);

const MyComponentThatNavigates = () => <button onClick={handleButtonClick} />;
```

### `Match`

An abstraction for conditional rendering based on path

#### Component

```tsx
import { Match } from "@pshershov/cocoa";

const MyComponentThatMatchesPaths = () => (
	<Match
		path="/employee"
		params={{
			firstName: "Kevin",
			lastName: "Malone"
		}}
	>
		<Employee />
	</Match>
);
```

#### Hook

```tsx
import { useMatch } from '@pshershov/cocoa'

const MyComponentThatMatchesUsingHook = () => {
  const isKevinMalone = useMatch({
    path: "/employee",
    params: {
			firstName: "Kevin",
			lastName: "Malone"
		}
  });

  return {isKevinMalone ? <Employee firstName="Kevin" lastName="Malone" /> : <NoEmployeeFound />}
}
```

# Nekudot Hashuvot

- User should manage his own rendering based on the URL
- Location will not return the familiar `Location` object but instead a changed one with added propertie(s) like `params` (which is basically a parsed `search`)
- 0 dependencies
- Most of the API will have an equivalent _Component_, _HOC_, _Hook_ and a programmatic solution:

Location

- `<Location />`
- `useLocation`
- `withLocation`
- `location()`

Link

- `<Link />`
- `useLink`
- `withLink`
- `link()`

Match

- `<Match />`
- `useMatch`
- `withMatch`
- `match()`
