# Vite Rails Example with React

## Overview

Inspried by guide: https://medium.com/@chowjiaying211/creating-a-react-rails-and-vite-app-74bb9b08a011

This is an example rails 7.1 app with `vite-rails` gem added using default config from `bundle exec vite install`
API controller serving json at: app/controllers/api/books_controller.rb
React component loading book content at: app/frontend/components/App.jsx

## Setup

### Install dependencies:

```console
bundle install
npm install
```

### Database

set up config/database.yml
then create and seed DB:

```console
rails db:create db:seed
```

## Dev Server

With Foreman

```console
gem install foreman
foreman start -f Procfile.dev
```

Or separately:

```console

# start rails server
rails s

#start vite dev server
bin/vite dev
```

now navigate to http://localhost:3000

## Tests

To run tests:

```console
npx vitest
```

