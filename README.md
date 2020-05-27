# Clustering with Node

> Created following the tutorial on [Multicore Programming in Node.js](https://dzone.com/articles/multicore-programming-in-nodejs) by [Dursun Koç](https://dzone.com/users/874141/dursunKoc.html)

> Taking advantage of your Epic 7742 cores.

> Fork of multiple process is needed to take advantage of multicore CPUs on NodeJS, because it is single-threaded.

> nodejs cluster, nodejs multicore,

![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)


![Showing the workers being created as needed](https://raw.githubusercontent.com/lucaswilliameufrasio/node-cluster-example/assets/node-workers.gif)

- Every time i refreshed the page, a cluster was created because of the heavy task created to make CPU busy.

---

## Content


- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Installation

- All the `code` required to get started
- Images of what it should look like

### Clone

- Clone this repo to your local machine using `https://github.com/lucaswilliameufrasio/node-cluster-example.git`

```shell
git clone https://github.com/lucaswilliameufrasio/node-cluster-example.git
```

### Setup

> Navigate to project's folder and install npm packages

```shell
$ cd FOLDER_NAME/
$ npm install
```

> Run the application with

```shell
$ npm start
```
---

## Usage
> Open the URL http://localhost:7777 and refresh the page to see the workers being created.

---

## FAQ

- **Why do you need this?**
    - To better use computer's resource.
---
## References

[Multi threading and multiple process in Node.js](https://itnext.io/multi-threading-and-multi-process-in-node-js-ffa5bb5cde98)

[Multicore Programming in Node.js](https://dzone.com/articles/multicore-programming-in-nodejs)

---

## Support

Reach out to me at one of the following places!

- LinkedIn at <a  href="https://www.linkedin.com/in/lucaswilliameufrasio/"  target="_blank">`linkedin.com/in/lucaswilliameufrasio/`</a>

## License

- **[MIT](http://opensource.org/licenses/mit-license.php)**