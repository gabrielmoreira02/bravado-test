# bravado-test

This project is a test assignment for bravado team. It was done by Gabriel Moreira, on December 12, 2022.



## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Possible Improvements

Right now, for testing purposes, the front end does a lot of stuff that should be on backend. We used store
to mock an api, and imported directly from a json file.

In an actual project, even though we would use store, all the pagination and selections should be moved to back end
(generally.)

Mobile responsivity wasn't considered very much when developing this application, as it wasn't one of the requests. To address this,
if needed, we would modify the container to take more space on smaller screens, using bulma helpers and media queries to change font
sizes if needed.

There are a few places where it was needed to use v-html for the page to work correctly. So, if this data is ever passed back to the API,
we need to handle possible XSS attacks. Right now, as it will not be passed to any API, thats not a concern.

We could better use components in an actual project, but for this small level of complexity, we used a very small amount. If it were to scale,
we should componentize better.
