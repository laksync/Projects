# Auxiliator

Auxiliator is an AI-powered student assistant — a web app that lets students ask questions about concepts they're studying and get clear, concise explanations in return. The name comes from the Latin root for "helper/assistant."

## Features

- **Conversational chat interface** with a minimal, dark-themed UI
- **Conversation memory** — the AI remembers earlier messages within the same session, so follow-up questions retain context
- **Markdown rendering** — AI responses with bold text, headings, and lists are rendered as proper formatted HTML (not raw markdown syntax)
- **Chat bubbles** — user messages and AI replies are visually distinguished, aligned right and left respectively
- **File attachment UI** and a **PDF Mode** toggle (currently in progress — PDF-based question answering is planned but not yet functional)

## Tech Stack

- **Backend:** Node.js, Express
- **AI Integration:** OpenAI SDK, routed through [OpenRouter](https://openrouter.ai) to Google's Gemini 2.5 Flash model
- **Frontend:** Vanilla HTML, CSS, and JavaScript
- **Markdown rendering:** [marked](https://github.com/markedjs/marked) for parsing, [DOMPurify](https://github.com/cure53/DOMPurify) for sanitizing AI-generated HTML before rendering
- **Fonts/Icons:** Google Fonts (Inter), Lucide icon font

## Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd auxiliator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get an API key from [OpenRouter](https://openrouter.ai/keys). A small credit balance (a few dollars) may be required depending on the model used.

4. Create a `.env` file in the project root with the following content:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```

   `.env` is already listed in `.gitignore`, so your key won't be committed to version control. Never share this file or commit it to a public repository.

5. Start the server:
   ```bash
   node server.js
   ```

6. Open your browser and go to `http://localhost:3000`.

## Project Structure

```
auxiliator/
├── server.js          # Express server, handles /chat endpoint and AI API calls
├── public/
│   ├── index.html      # Main page structure
│   ├── script.js        # Frontend logic (chat, PDF mode toggle, markdown rendering)
│   ├── style.css        # Styling (chat bubbles, layout, theme)
│   ├── logo.png         # Mascot/hero logo
│   └── fav.png          # Favicon
├── .env                # API key (not committed)
├── .gitignore
└── README.md
```

## Roadmap

- [ ] Functional PDF Mode — upload a PDF, extract its text, and let the AI answer questions based on its contents
- [ ] "New conversation" reset button to clear session memory
- [ ] Deploy to a live hosting platform

## Status

This is an active personal project, currently a work in progress. Some features (like PDF Mode) are present in the UI but not yet fully implemented.