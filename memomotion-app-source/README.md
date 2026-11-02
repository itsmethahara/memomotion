# MemoMotion — Learn Through Movement

MemoMotion is a language-learning web app starter built around vocabulary flashcards, spaced-repetition-inspired review, learning analytics, and optional gesture-based interaction.

## Included in this MVP

- Responsive lavender SaaS dashboard.
- Learning statistics, daily goal, weekly activity chart, and deck cards.
- Flashcard study mode with reveal, previous/next, favorites, and recall ratings.
- Keyboard shortcuts: `←` previous, `→` next, `Space` reveal, `1` Again, `2` Hard, `3` Good, `4` Easy, `F` favorite.
- Deck selection and language filters.
- Gesture setup screen with an interaction guide and camera permission preview.
- AI vocabulary generator demo with editable generated vocabulary (local sample generation; no AI provider is connected).
- Browser-local persistence for study progress and favorites.

## Run locally

Requirements: Node.js 18.18+ or 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/       Reusable interface components
  data/             Demo vocabulary and decks
  hooks/            Local persistence hooks
  pages/            Dashboard, study, decks, generator, gestures
  App.tsx           App shell and navigation
  main.tsx          React entry point
  styles.css        Design system and responsive styling
```

## Gesture recognition status

The current version includes the gesture onboarding UI and camera permission preview. It does **not** yet classify live hand gestures. The study experience is fully usable with mouse, touch, and keyboard. A production gesture module can be added with MediaPipe Tasks Vision and should map recognized gestures to the same study actions.

## AI generation status

The generator currently uses a local sample dataset so the interface works without credentials. To connect a real model, add a server-side API route and keep provider keys on the server. Do not put private API keys in frontend environment variables.

## Persistence

Progress and favorites are stored in browser `localStorage` for this starter. Add Supabase authentication, database tables, and row-level security before using it as a multi-user production app.

## Suggested next steps

1. Add Supabase authentication and persistent user data.
2. Implement a tested spaced repetition scheduling service.
3. Add MediaPipe hand landmark recognition.
4. Connect a server-side AI vocabulary endpoint.
5. Add automated tests and accessibility checks.

## License

No license has been selected. Add a license file before distributing the project as open source.
