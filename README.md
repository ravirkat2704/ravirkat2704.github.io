# Ravi Kenchanagoudar — Portfolio

React + Vite portfolio for GitHub Pages. Built with Motion animations and Lucide icons.

## Requirements
- Node.js LTS (includes npm)
- GitHub account: `ravirk2704`

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal.

## Build and test production output
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (recommended: GitHub Actions)
1. Create a **public** repository named exactly `ravirk2704.github.io`.
2. Upload/commit the contents of this project to the repository root (the `package.json` must be at the root, not inside an extra nested folder).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Commit and push the included `.github/workflows/deploy.yml` workflow (included in this project).
6. Open the **Actions** tab and wait for the `Deploy portfolio to GitHub Pages` workflow to finish successfully.
7. Visit `https://ravirk2704.github.io`.

The Vite `base` is `/`, correct for the personal site repository `ravirk2704.github.io`. If you instead use a repository named something other than `ravirk2704.github.io`, change `base` in `vite.config.js` to `"/REPOSITORY-NAME/"`.

## Add project screenshots
Copy your own screenshots into `public/images/` using:
- `travelgo.jpg`
- `coffee-shop.jpg`
- `nursery.jpg`
- `airline.jpg`

Use genuine screenshots of your projects. The cards display placeholders if files are not present.

## Add project repository and demo URLs
Open `src/App.jsx`. In the `projects` array, replace each project's empty `github` and `demo` values with actual URLs, for example:
```js
github: "https://github.com/ravirk2704/your-project-repo",
demo: "https://your-live-demo.example"
```
Leave them empty until real links exist; the site intentionally does not invent repository URLs.

## Contact information
Contact details currently use the email and phone number from the supplied CV:
- `ravikenchanagoudar@gmail.com`
- `+91 92651 50356`

To change them, edit `EMAIL` and `WHATSAPP` near the top of `src/App.jsx`.

## Important
GitHub Pages hosts the frontend only. It does not run a Laravel/PHP backend or a MySQL database. Your TravelGo project needs separate backend hosting and database setup if you want a live, working demo.

The uploaded CV is included at `public/resume.pdf`. You can add a resume button to the site if desired.

The hero section includes a **View CV** link to `/resume.pdf`.
