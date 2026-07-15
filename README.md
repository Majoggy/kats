# KatKin Tech Test

A NestJS backend (at the root) and a Next.js frontend (`frontend/`).

## Backend

```bash
yarn
yarn start:dev
```

Runs on `http://localhost:3001`.

### Tests

```bash
yarn test
```

## Frontend

```bash
cd frontend
yarn
yarn dev
```

Runs on `http://localhost:3000`.

## Running both

Start the backend first, then the frontend, in separate terminals. Once both are up, visit:

```
http://localhost:3000/welcome/<USER-ID>
```

using a user ID from `data.json`. Note that visiting `http://localhost:3000` directly will forward you to the test URL.
