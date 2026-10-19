# Simon Lu — personal portfolio

A complete static portfolio with biography, education, project highlights, experience, skills, contact links, and a downloadable résumé. It works by opening `index.html` and can be hosted on GitHub Pages without installing anything.

## Open it on your computer

1. Extract the ZIP (on Windows, right-click it and choose **Extract All**).
2. Open the extracted `simon-portfolio` folder.
3. Double-click `index.html` to view the website in your browser.

Keep the files together. The résumé button opens the PDF inside the `assets` folder.

## Upload and publish on GitHub

1. Sign in to your GitHub account, **SimonLu1**, and create a **public** repository named **SimonLu1.github.io**. If you already use that repository, create a new one named **portfolio** instead.
2. In the repository, choose **Add file → Upload files**. Upload the **contents** of the extracted folder, including `index.html`, `styles.css`, `script.js`, `README.md`, and the entire `assets` folder. Do not upload the ZIP or place everything inside another `simon-portfolio` folder. `index.html` must be at the repository’s top level.
3. Commit the uploaded files.
4. Open **Settings → Pages**. Set **Source** to **Deploy from a branch**, then select **main** and **/ (root)**. Save.
5. When GitHub finishes publishing, use the website link shown on the Pages screen.

For `SimonLu1.github.io`, the address will be **https://simonlu1.github.io/**. For `portfolio`, it will be **https://simonlu1.github.io/portfolio/**. These are the expected addresses after you publish, not existing deployments created by this package.

Official instructions: https://docs.github.com/en/pages/quickstart

## Update your content

| File | What to change |
| --- | --- |
| `index.html` | Bio, job dates, education, project descriptions, links, and skills |
| `styles.css` | Colors, typography, spacing, and mobile layouts |
| `script.js` | Mobile navigation, project filtering, and copy-email behavior |
| `assets/Simon-Lu-Resume.pdf` | Replace with your newest résumé, keeping the filename |
| `assets/favicon.svg` | Browser-tab monogram |

The résumé download is the PDF you supplied on September 29, 2026. The website includes the coursework section you requested separately. Replace the PDF when you have an updated version.

Your contact email appears in two `mailto:` links and one visible email link in `index.html`. The copy button uses the visible email automatically. Keep these links in sync if you change the address.

The Ataxx card currently links to your GitHub profile. Once you have confirmed its direct repository URL, replace that card’s link and change its label to “View project.”

## How the site works

- Project filters show all four projects, three software projects, or the network systems project.
- “Inside the build” expands more information about each Java game.
- Mobile navigation can be opened, closed, and dismissed with Escape.
- Email links open the visitor’s configured email application. No messages are collected or sent by the website itself.
- Copy email uses the browser clipboard, with a local-file fallback and clear feedback if copying is unavailable.
- All bio content, project details, external links, and résumé links remain available without JavaScript.
- There are no external fonts, frameworks, trackers, API keys, packages, or build tools to configure.
- Project illustrations are conceptual visuals, not screenshots of the original applications.

## Validation

The package is checked for JavaScript syntax, HTML structure and references, local assets, CSS structure, ZIP integrity, and scripted interaction behavior. A real-browser visual review was not available in the creation environment. Open the site on your computer and phone before publishing to review its appearance in your browsers.

## If something does not load

Confirm `index.html` is at the top of the repository and that `styles.css`, `script.js`, and `assets` were uploaded alongside it. Keep the filenames and capitalization unchanged. For a PDF update, replace the existing PDF rather than adding a differently named file.
