<img src="https://socialify.git.ci/Ntombenhle2004/Task8.2-UI-Challenge/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Task8.2-UI-Challenge" width="640" height="320" />

# Vite Task 8.1 UI Challenge

This is a simple **React + Vite** project that demonstrates a responsive UI layout with separate components for **mobile** and **desktop** views. The project uses reusable components such as `Logo`, `Heading`, `Paragraph`, and `Email`. It is built with **TypeScript**, **Vite**, and **React 19**.

---

##  Project Structure

```
src/
│── App.jsx
│── App.css
│
├── components/
│   ├── logo.jsx
│   ├── heading.jsx
│   ├── paragraph.jsx
│   ├── email.jsx
│   └── row2Img.jsx (optional / commented out)
│
├── main.jsx
```

---

##  Features

- **Mobile Layout (`Mobile` component)**  
  Displays the logo, heading, paragraph, and email input stacked vertically.  

- **Desktop Layout (`Desktop` component)**  
  Displays the same components in a structured two-row layout.  

- **Reusable Components**  
  - `Logo`: Displays project logo  
  - `Heading`: Title or heading text  
  - `Paragraph`: Informational text  
  - `Email`: Input field for email capture  
  - `Row2Img`: (optional, currently commented out)  

- **Vite + React 19** for fast development  
- **TypeScript support**  
- **Linting with ESLint**  

---

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ntombenhle2004/Task8.2-UI-Challenge.git
   cd vite-task8-1-ui-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   The app will be available at: [http://localhost:5173](http://localhost:5173)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Dependencies

```json
"dependencies": {
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
},
"devDependencies": {
  "@eslint/js": "^9.33.0",
  "@types/react": "^19.1.10",
  "@types/react-dom": "^19.1.7",
  "@vitejs/plugin-react": "^5.0.0",
  "eslint": "^9.33.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.3.0",
  "typescript": "~5.8.3",
  "typescript-eslint": "^8.39.1",
  "vite": "^7.1.2"
}
```

---

##  Usage

- Modify **components** inside `src/components/` to update the UI.  
- Add styles in **App.css**.  
- Uncomment `Row2Img` in `App.jsx` if you want to include an image in the second row.  

---

## License

This project is for **educational purposes**. You may use, modify, and distribute it freely.  

---

