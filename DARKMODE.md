                    
                    
                    
                    
                    
                    
                    ilw-header
                       │
              User clicks toggle
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        Set cookie          Dispatch event
     ilw-dark-mode=true          │
             │                   │
             │                   ▼
             │              ilw-page
             │                   │
             │            Update data-theme
             │                   │
             │                   ▼
             │            dark-mode.css
             │
             ▼
    Persists preference
    across page loads/sites


## Picture of what stays in which repository:

================================================
ILW-HEADER REPOSITORY
================================================

src/
│
├── ilw-header.ts
│     │
│     ├── Dark Mode checkbox HTML
│     ├── checkbox change handler
│     ├── read dark-mode cookie
│     ├── write dark-mode cookie
│     └── dispatch "ilw-dark-mode-changed"
│
├── ilw-header.css
│     │
│     └── Dark Mode checkbox/label styling
│
└── ilw-header.styles.css
      │
      └── Leave existing styles unless your
          project's existing architecture says
          otherwise


================================================
ILW-PAGE REPOSITORY
================================================

src/
│
├── ilw-page.ts
│     │
│     ├── read dark-mode cookie on page load
│     ├── set <html data-theme="dark/light">
│     └── listen for "ilw-dark-mode-changed"
│
└── dark-mode.css
      │
      └── ALL actual page dark-mode styling


## Finally the application becomes:

    <ilw-header>
    └── Dark Mode checkbox
              │
              ▼
        writes cookie
              │
              ▼
        fires event
              │
              ▼
    <ilw-page>
    └── changes data-theme
              │
              ▼
      dark-mode.css


## My Test order is supposed to be:
① npm test.  (If this fails check node -v if its not 22.23.2 then type, nvm use 22.23.2 and then check nvm -v again then run npm test)
       ↓
② npm run dev 
       ↓
③ See Dark Mode checkbox (Open http://localhost:5173/samples)
       ↓
④ Check cookie in DevTools
       ↓
⑤ Verify custom event
       ↓
⑥ Open ilw-page
       ↓
⑦ Click checkbox
       ↓
⑧ Page changes immediately
       ↓
⑨ Refresh
       ↓
⑩ Theme persists
