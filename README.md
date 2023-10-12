# MyiMDb App

- navigation bar which contains Home and addMovie.
- Home Page, displays the movie Card with image, title, release year and rating.
- addMovie, displays the form to get value that creates the new movieCard

## Creating react app

Added navigation bar, that switch between home and addMovie page.

## movieCard

Created the movieCard ad=nd saved to local storage.

## movieForm

while submitting the data, it push the movie to the home page as card.

## creating responsivve grid

```
@media (min-width: 600px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}
```

## Router

Navigation funtionality using router library

### have to be done in the App.jsx file

- Here indexPage is Home page by default, it should be rendered.
- working Page is AddMovieForm, onclick the link have to render.
- While rendering next page, to display the loading, we are using lazy, suspense from react.
- If the link is not available, we have to show the notfoundPage.
- here we are using three router-dom functions routes, route, browserRouter.

### Layout component

- It render the selected page title as a document title and render the page children to the UI.
- Layout contains Nav component, it uses link function form react-router-dom to open the selected Page.

### pages

- Every page has Layout component which sets title to the page, and inside the layout the page content is wrapped.
- To move form current page, use link function,

```
<link to='/'>Go back to home?</link>
```
