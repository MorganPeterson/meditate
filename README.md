# Meditate

An experiment in generative creative writing.

## About




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

Create the dist directory containing the Javascript files
```sh
$ npm run build
```


### Run the executable

Run `run.cjs` to fetch text. Will write out to stdio.

```sh
$ npm run start
# or
$ node meditate.mjs
```

