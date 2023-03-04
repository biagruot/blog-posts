# Blog posts

A web app that uses Graphqlzero to show blog posts

## Features

- ⚡️ Angular 15
- ⛑ TypeScript
- 📪 NgRX
- 🚧 Apollo GraphQL
- 📝 Reactive Forms
- 📏 ESLint — To find and fix problems in the code
- 💖 Prettier — Code Formatter for consistent style

## Live Demo

https://blog-posts-eight.vercel.app/feed


## Overview

- The project has been built following the LIFT (Locate, Identify, Flattest, and Try to be DRY) architecture and industry-standard best practices. The LIFT architecture facilitates code scalability, maintainability, and testability, enabling it to handle large-scale projects with ease.
- The project features a responsive UI design that showcases my prowess in vanilla CSS without relying on external CSS libraries.
- The codebase is adherent to the ESLint and Prettier guidelines, ensuring code consistency, maintainability, and readability.

## Technical details

- Reactive Programming: Reactive programming, as facilitated by `ngrx/store` and `ngrx/effects`, is employed in the project, offering an efficient way of managing state and enabling more predictable and maintainable code.
- OnPush Change Detection Strategy: The `ChangeDetectionStrategy.OnPush` technique enhances the app's performance by having Angular check only the inputs, outputs, or event handlers that have changed, significantly reducing the time spent on checking every aspect of the component.
- Separation of Concerns: The component class focuses on the component's view logic, while the state management logic is delegated to ngrx/store. Such a separation fosters code understandability and maintainability, reducing code complexity and redundancy.

## Missing Features

Due to time constraints, and some unexpecteds which prevented me from dedicating the plannet time to the project, it lacks the following features:

- Unit Tests and e2e Tests: The lack of testing is regrettable, but it does not detract from the project's core functionality.
- Alert/Error: The use of browser alert/error is not recommended, and I recognize that a custom alert/modal would be a more suitable replacement.
- UI/UX and Edge Cases: The project's user interface and user experience, including edge case handling, require further refinement to enhance their quality and accessibility.
- More meaningful comments


## Run Locally

Clone the project

```bash
  git clone https://github.com/biagruot/blog-posts.git
```

Go to the project directory

```bash
  cd blog-posts
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  ng serve
```

## Author

👤 **Biagio Ruotolo**

* Github: [@biagruot](https://github.com/biagruot)
* LinkedIn: [@biagioruotolo](https://linkedin.com/in/biagioruotolo)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

<p align="center"> Made with :heart: in 🇮🇹 </p>
