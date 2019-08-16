# Extract my file

A website using wasm to extract your file on your local machine

## Prerequesites for building the site

This site uses Web Assembly (wasm) which is compiled from Rust code. So to work on it some toolchains are required:

* The Rust toolchain to build our rust code and manange native dependencies. You can [install Rust from here][1].
* `wasm-pack` is mostly a convinience which contains and invokes some other tools (mainly the Rust compiler and `wasm-bindgen`) for us in order to generate Web assembly and Java Script bindings. You can [install wasm-pack from here][2].

## Building the site

With the prerequesites installed, it should be as simple as:

```bash
wasm-pack build --target web
```

Since this web application is designed as a simple static website you should be able to just look at it with a local browser.

By using the `--target web` flag we loose out on the ability of the default target to easily use npm packages from within Rust code, but we also no longer require a bundler.

## Development Dependencies

* ESLint (<https://eslint.org>) is used for javascript linking.
* `prettier` (<https://prettier.io>)is used for formatting.

[1]: https://rustup.rs/
[2]: https://rustwasm.github.io/wasm-pack/installer/
