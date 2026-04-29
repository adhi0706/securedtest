# SecuredApp Frontend (Next.js)

This project is the public SecuredApp marketing site and chatbot interface. It runs on **Next.js 14** with **React 18**, Tailwind, and Redux Toolkit. The chatbot widget calls the FastAPI backend at `http://72.60.102.190:2000` in production.

---

## Prerequisites

- Node.js 18+
- npm 9+

Install dependencies:

```bash
npm install --legacy-peer-deps
```

The `--legacy-peer-deps` flag avoids peer conflicts between `react-chat-elements` and React 18.

---

## Environment

Create `.env.local` with the following keys:

```env
NEXT_PUBLIC_API_BASE=http://72.60.102.190:2000
SECUREBOT_SYSTEM_PROMPT="You are SecureDApp's assistant..."
```

- `NEXT_PUBLIC_API_BASE` controls where the chatbot posts messages and form data.
- Update the prompt if marketing/CS teams tweak copy.

---

## Scripts

```bash
npm run dev    # Start local dev server at http://localhost:3000
npm run build  # Production build
npm start      # Serve the Next.js build (used in production)
```

> Note: `npm start` expects a serverful deployment (e.g., PM2, systemd, Docker). The deploy branch currently runs behind a custom Node host.

---

## Chatbot Integration

- Chat UI lives in `src/components/chat/ChatWidget.jsx`.
- Form submissions call `${NEXT_PUBLIC_API_BASE}/chatbot/form-submit`.
- Conversations hit `${NEXT_PUBLIC_API_BASE}/chat`.
- User info persists via `localStorage` to keep follow-up messages seamless.

When developing locally with the FastAPI backend running at `http://127.0.0.1:8000`, set:

```env
NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000
```

---

## Deployment Checklist

1. Build: `npm run build`
2. Copy `.next/` bundle (or run `npm start` directly on the target server)
3. Provide `.env.production`/`.env.local` with the correct API base URL
4. Ensure the FastAPI backend `/chat` and `/chatbot/form-submit` endpoints are accessible from the hosting environment

Optional: use Docker/PM2 to keep the process alive.

---

## Repository Layout Highlights

- `src/components/chat/` – chatbot widget, styles, guided flows
- `src/store/` – Redux slices
- `public/assets/` – static images and icons
- `tailwind.config.js` / `postcss.config.js` – styling pipeline

---

## Support

For deployment assistance or feature requests, contact the SecuredApp web team at [hello@securedapp.in](mailto:hello@securedapp.in).
