# Meditate

## About

A NodeJS script that uses OpenAI Completion to create prose.

## Credit

This project was originally a fork of [](), but all of the original code has been removed and this is an original work.


## Usage

1. Put your API key in a .env file at the root
2. Run TSC to build dist directory with JavaScript files
3. Run meditate.mjs to produce text


### Configuration

Put your OpenAI key into the `.env.sample` file and then copy it to `.env`

```sh
$ cp .env.sample .env
```

The `config.ts` has a good set of defaults, but any changes you want to make that get passed to OpenAI should be made there.


### Build Javascript files

Create the build directory containing the Javascript files

```sh
$ npm run build
```


### Run the executable

Run `meditate.mjs` to fetch text.

```sh
$ npm run start
# or
$ node meditate.mjs
```
