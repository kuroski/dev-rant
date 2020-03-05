# Dev rant clone

This is a study project to learn how a Ember.js application works.

## Installation

* `git clone git@github.com:kuroski/dev-rant.git` this repository
* `cd dev-rant`
* `yarn`

## Running / Development

* `yarn start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember t`
* `ember t -s`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This application is automatically deployed to Netlify.

Since we can't log in using DevRant auth endpoint, I created a "proxy server" that is instanciated through Netlify Functions.

You can check when you run `yarn start` a instance of a local server is also created.

### Todo

- [ ] Improve layout
- [ ] Add link to the `/login` page
- [ ] Add link to rant details
- [ ] Improve application tests
- [ ] Create a profile page
- [ ] Add infinite pagination
