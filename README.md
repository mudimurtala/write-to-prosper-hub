# Writerpreneur Academy

A landing page for Writerpreneur Academy's **Write 2 Earn** webinar.

## Development

This project is built with:

* **TanStack Start**
* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The development server will start locally. Open the URL shown in your terminal, usually:

```text
http://localhost:8080/
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

### Format the code

```bash
npm run format
```

## Project structure

```text
writerpreneur-academy/
├── public/          # Static assets such as images and favicon
├── src/
│   ├── components/ # Reusable React components
│   ├── hooks/      # Custom React hooks
│   ├── lib/        # Utility functions
│   └── routes/     # Application routes
├── package.json     # Project dependencies and scripts
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Deployment

The project is deployed through **Netlify** and connected to the GitHub repository.

The normal workflow is:

1. Make changes locally.
2. Run `npm run dev`.
3. Test and review the website in the browser.
4. Run `npm run build` to verify the production build.
5. Commit the changes with Git.
6. Push the changes to GitHub.
7. Netlify automatically deploys the updated version.

## License

This project is private and maintained for Writerpreneur Academy.
