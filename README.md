# Writerpreneur Academy

A landing page for Writerpreneur Academy's **Write 2 Earn** webinar, built to turn social media visitors into an active WhatsApp community.

**Live site:** [writerpreneur-academy.netlify.app](https://writerpreneur-academy.netlify.app/)

## About

Writerpreneur Academy teaches people how to turn writing skills into real income. This site presents the free Write2Earn webinar and guides visitors straight into the community WhatsApp group, with a built in admin dashboard so the client can update the group link at any time without needing a developer.

## Built With

* **TanStack Start**
* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Firebase** (Authentication and Firestore, powering the admin dashboard)

## Development

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the URL shown in your terminal, usually:

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

## Project Structure

```text
writerpreneur-academy/
├── public/          # Static assets such as images and favicon
├── src/
│   ├── components/  # Reusable React components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions and Firebase config
│   └── routes/      # Application routes, including the admin dashboard
├── package.json     # Project dependencies and scripts
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## Deployment

The project is deployed through **Netlify** and connected to this GitHub repository.

The normal workflow:

1. Make changes locally.
2. Run `npm run dev`.
3. Test and review the site in the browser.
4. Run `npm run build` to confirm the production build works.
5. Commit the changes with Git.
6. Push the changes to GitHub.
7. Netlify automatically deploys the updated version.

## License

This project is maintained for Writerpreneur Academy.
