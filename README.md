# GitHub README Builder

A production-ready Next.js landing page for shaping a clearer GitHub profile README. The live workspace includes automatic profile scanning and an instant README preview.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Validate the project with `npm run lint`, `npm run typecheck`, and `npm run build`.

## Deployment

Deploy this repository to Vercel with the Next.js preset. No environment variables are required for the current scaffold. The `/api/health` endpoint returns a no-cache JSON health response for uptime checks.

## Pull requests

All changes should pass the CI workflow before merging into `main`.

## Table of Contents

1. [Introduction](#introduction)
2. [Builder Page Overview](#builder-page-overview)
3. [Key Features](#key-features)
4. [Component Overview](#component-overview)
   - [Builder Navbar Tools](#builder-navbar-tools)
   - [Editor & Live Preview (Right Section)](#editor--live-preview-right-section)
   - [Editor Toolbar & Tools](#editor-toolbar--tools)
   - [AI Enhancement Tools](#ai-enhancement-tools)
   - [Auto README Generator](#auto-readme-generator)
5. [How to Use the Builder](#how-to-use-the-builder)
   - [Creating a New Project](#creating-a-new-project)
   - [Adding and Managing Sections](#adding-and-managing-sections)
   - [Editing and Previewing Markdown](#editing-and-previewing-markdown)
   - [Committing Directly to GitHub](#committing-directly-to-github)
   - [Using AI Tools](#using-ai-tools)
   - [Importing/Uploading Existing READMEs](#importinguploading-existing-readmes)
   - [Saving and Loading Projects](#saving-and-loading-projects)
   - [Exporting and Copying Markdown](#exporting-and-copying-markdown)
   - [Split Screen and Word Wrap](#split-screen-and-word-wrap)
6. [Advanced Features](#advanced-features)
   - [Drag-and-Drop Section Reordering](#drag-and-drop-section-reordering)
   - [Live Markdown Preview](#live-markdown-preview)
   - [Accessibility and Responsiveness](#accessibility-and-responsiveness)
7. [FAQ](#faq)
8. [License](#license)



## Introduction

The **GitHub Readme Markdown Builder** page in the ReadmeCodeGen app is a powerful, user-friendly tool for creating, editing, and managing GitHub README files. It is designed for both developers and non-technical users to quickly assemble professional documentation.

- 👉 [Try the GitHub README Builder now](https://www.readmecodegen.com/builder)

It uses a modular section-based approach combined with real-time markdown editing. Integrated AI enhancements and GitHub features make it effortless to manage projects and push changes directly to your repositories.



## Builder Page Overview

The Builder page is the heart of ReadmeCodeGen, offering a modular, section-based approach to README creation. The workspace is divided into two primary areas: the left sidebar for managing your sections and tools, and the right section for the active editor and live preview.

Users can add, remove, reorder, and edit sections, preview the result in real time, and leverage AI tools to enhance their content. The interface is designed for speed, clarity, and flexibility, supporting both quick edits and in-depth documentation projects.

<img width="1919" height="830" alt="image" src="https://github.com/user-attachments/assets/8fcdea8b-998b-4b38-8174-caef29967c37" />



## Key Features

- **Section-Based Editing**: Build your README from reusable, customizable templates.
- **Live Markdown Preview**: See your changes rendered instantly, with GitHub-style formatting.
- **Direct GitHub Commits**: Edit and commit your README files directly to your GitHub repositories with a single click.
- **AI-Powered Enhancement**: Use AI to improve clarity, grammar, and structure of your markdown.
- **Auto README Generator**: Generate comprehensive READMEs by allowing AI to analyze your GitHub repository code.
- **Drag-and-Drop Reordering**: Organize sections with intuitive drag-and-drop.
- **Project Management**: Save, load, and manage multiple README projects locally.
- **Import/Export**: Bring in existing README files directly from GitHub or upload from your device, and export your work when finished.
- **Rich Insertions**: Enrich your README with static badges, styled links, file trees, and social icons.
- **Split Screen & Word Wrap**: Flexible editing and preview layouts for all workflows.
- **Accessibility & Responsiveness**: Fully keyboard-accessible and mobile-friendly.



## Component Overview

### Builder Navbar Tools

<img width="1919" height="79" alt="image" src="https://github.com/user-attachments/assets/3482b5f4-66f3-41bd-803a-f90a663c4c2e" />


The top navigation bar provides access to your project's main actions:
- **More**: A dropdown menu containing additional utilities like downloading your README, copying raw text, and accessing settings.
- **Feedback**: A quick-access button to report issues, suggest features, or provide general feedback to the developers.
- **New Project (+)**: Start a fresh README project with optional template sections.
- **Save Project**: Save your current progress locally in your browser.
- **Your Projects**: View, load, or delete your saved README projects.
- **Templates**: Browse and apply complete, pre-built README templates to instantly jumpstart your project.
- **Import Content**: Fetch and load an existing README directly from a public or private GitHub repository.
- **Upload README**: Upload a `.md` file from your local computer into the builder.
- **Commit**: Push your current README content directly to a selected GitHub repository using a custom commit message.
- **Enhance with AI (Magic Wand)**: Automatically analyze and improve the grammar, structure, and clarity of your entire README.
- **Split Screen**: Toggle a side-by-side view of the editor and the live preview.
- **Fullscreen**: Expands the builder to take up the entire screen for a distraction-free, immersive editing experience.

### Editor & Live Preview (Right Section)

The right side of the Builder interface is dedicated to the active workspace where you write and preview your markdown:
- **Section Editor**: A Monaco-powered rich text editor that provides markdown syntax highlighting, intelligent indentation, and comfortable padding. It focuses on the specific section you select from the left panel.
- **Live Markdown Preview**: A real-time rendering pane styled to closely match GitHub's native appearance. As you type in the editor, the preview instantly updates so you always see exactly what your final README will look like.
- **View Toggle**: Easily toggle between a focused single-pane view (switching between Edit and Preview tabs) or a side-by-side Split Screen view for maximum productivity.

<img width="1466" height="752" alt="image" src="https://github.com/user-attachments/assets/371ba1d8-813c-4613-91f3-5f57b52eb9fd" />


### Editor Toolbar & Tools

While editing a section, the toolbar at the top right of the editor provides quick tools:
- **AI Enhance (Magic Wand)**: Automatically improve the grammar, clarity, and detail of the specific section you are currently editing. Perfect for when you need help writing or expanding on a thought.
- **Word Wrap**: Toggle text wrapping inside the Monaco editor so you don't have to scroll horizontally when writing long paragraphs.

**Insert Menu (Three Dots)**
Clicking the three vertical dots reveals a dropdown with insertion utilities:
- **Insert Badge**: Add custom badges (via Shields.io) to highlight versions, statuses, or licenses.
- **Insert Link Btn**: Add styled markdown links to external resources.
- **Insert File Tree**: Visualize your project's structure by inserting a text-based or Mermaid.js file tree diagram.
- **Insert Social Icons**: Add linked social media icons (e.g., Twitter, LinkedIn, GitHub) to your profile README.
- **Auto Generate README**: Let AI analyze your repository code to automatically generate a complete, professional section or full README document based on your actual codebase.

<img width="731" height="748" alt="image" src="https://github.com/user-attachments/assets/8228b528-d540-4055-9660-6accadffa872" />


### AI Enhancement Tools

- **Section Enhancement**: Click the magic wand icon inside the editor to specifically improve the section you are currently working on.
- **Full Document Enhancement**: Use the global "Enhance with AI" button in the navbar to review and improve the entire README. The tool provides a side-by-side comparison of the original and AI-suggested content so you can accept or reject changes.

### Auto README Generator

- **AI-Powered Analysis**: The Auto README Generator reads your actual repository codebase to understand your project structure, frameworks, dependencies, and features.
- **Smart Filtering**: It intelligently skips large binaries or irrelevant files (like `node_modules`) to generate accurate, professional documentation quickly.
- **Private Repository Support**: By authenticating with GitHub, you can generate a README for your private repositories directly from the builder.
- **Custom API Keys (Unlimited Quota)**: Bypass shared limits and wait times by securely providing your own free Google AI Studio (Gemini) API key via the "Manage API key" button. Your key is securely stored locally in your browser and used only to power your own generations.

<img width="1347" height="575" alt="image" src="https://github.com/user-attachments/assets/2b6dc99b-4371-416e-96f5-0630d463a4b0" />


## How to Use the Builder

### Creating a New Project

1. Click the **"+"** button in the navbar.
2. Enter a project title.
3. Choose to start completely fresh or preserve any existing sections currently in the editor.
4. Dont forget to save your project. if you dont save your project then it will be lost when you close the browser.

### Adding and Managing Sections

1. Browse the **Available Templates** in the sidebar.
2. Click a template to instantly add it to your project.
3. Drag and drop sections using their handles to reorder them visually.
4. Use the section controls to reset a section to its default template or remove it entirely.

### Editing and Previewing Markdown

1. Click on a section in the left panel to open it in the **Section Editor**.
2. Write your markdown. Syntax highlighting will assist you.
3. See your changes render instantly in the **Preview** pane on the right.
4. Toggle word wrap or use the split screen for the most comfortable view.

### Committing Directly to GitHub

1. Ensure your README looks exactly how you want it in the live preview.
2. Click the **Commit** button in the top navbar.
3. Select your desired GitHub repository from the dropdown. (You must be signed in with GitHub).
4. Enter an optional commit message (e.g., "Update README documentation").
5. Click **Commit**. The builder will securely push the README directly to the root of your GitHub repository.

<img width="859" height="727" alt="image" src="https://github.com/user-attachments/assets/9ac03e53-9ce8-4a0b-b022-930aa2dc55e2" />


### Using AI Tools

1. To improve a single section, click the **magic wand** icon located on the editor toolbar.
2. To improve the full document, click **Enhance with AI** in the top navbar.
3. Review the AI's suggestions side-by-side and choose to accept or reject the modifications.

### Importing/Uploading Existing READMEs

1. Click **Import Content** to fetch an existing `README.md` from any of your GitHub repositories.
2. Alternatively, click **Upload File** to select a markdown file from your computer.
3. The imported content will be added to your editor as a new section, ready for editing.

### Saving and Loading Projects

1. Click **Save** in the navbar to store your current README progress.
2. Access **Your Projects** to reload a previously saved project or clean up your saved list. 
3. *Note: Projects are saved locally in your browser.*

### Exporting and Copying Markdown

Open the **More** menu from the navbar to access a variety of export options:
1. **Copy Markdown**: Instantly copy the final compiled markdown text to your clipboard.
2. **Download Markdown**: Save your work directly as a `README.md` file to your computer.
3. **Download as HTML**: Export your README rendered as an HTML file.
4. **Download as PDF**: Export your README as a formatted PDF document.
5. **Download as Word**: Export your README as a Microsoft Word (`.docx`) document.

<img width="728" height="759" alt="image" src="https://github.com/user-attachments/assets/c64ab2a6-3aa6-4955-af3d-8008fa281c70" />


### Split Screen and Word Wrap

- Toggle **Split Screen** via the navbar for side-by-side editing and live previewing.
- Use the **Word Wrap** button in the editor toolbar to toggle text line wrapping for easier reading.



## Advanced Features

### Drag-and-Drop Section Reordering

- Grab the handle on any section block to drag it up or down. The final markdown preview will automatically reflect the order of your sections.

<img width="434" height="608" alt="image" src="https://github.com/user-attachments/assets/866dbaaf-2bf0-4265-b4b3-d55fe4d9715f" />


### Live Markdown Preview

- The preview pane updates instantaneously as you type. It is styled with CSS that closely mimics GitHub's native markdown rendering for a true WYSIWYG experience.

### Accessibility and Responsiveness

- All core features and dialogs are fully keyboard-accessible.
- The interface is responsive and supports mobile, tablet, and desktop workflows.
- Native support for Dark Mode based on system preferences.



## FAQ

**Q: Can I add my own custom section templates?**  
A: Yes! You can edit any existing section after adding it, and there is also a generic custom section template you can use to write entirely from scratch.

**Q: How does the "Commit to GitHub" feature work?**  
A: By authenticating with your GitHub account, the builder can list your repositories. When you click "Commit", it uses the GitHub API to update or create the `README.md` file directly on your repository's default branch. It requires minimal OAuth scopes and does not access private code.

**Q: Can I commit to private repositories?**  
A: Yes! As long as you have authenticated with GitHub and have write access to the repository, you can commit your README directly to both public and private repositories.

**Q: How does the Auto README Generator work?**  
A: By providing a repository URL, the AI analyzes your actual code files to determine functionality, structure, and dependencies. It then drafts a complete, professional README tailored strictly to your repository's actual code.

**Q: Is my data saved automatically?**  
A: Yes, your work is auto-saved to your browser's `localStorage` to prevent accidental loss. You can also manually use the "Save" feature to organize multiple distinct projects.

**Q: Is the markdown preview identical to GitHub?**  
A: The preview is styled to match GitHub's rendering very closely. For a 100% accurate final check, you can use the "Preview on GitHub" feature before committing.



## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.



## 💖 Feedback & Support

If you love using ReadmeCodeGen, please consider giving us a **star** on GitHub! ⭐

- **Found a bug?** Open an [Issue](https://github.com/Readmecodegen/github-readme-builder/issues) on our repository.
- **Have a feature request?** We'd love to hear it! Start a [Discussion](https://github.com/Readmecodegen/github-readme-builder/discussions) or drop an issue.
- **Want to contribute?** We welcome PRs! 

Your feedback and stars help keep this project growing.



## 🚀 Ready to Build Your README?

Start building your professional README today:

- [ReadmeCodeGen Builder](https://www.readmecodegen.com/builder/github-readme-generator)

No registration required to build locally. All changes are saved automatically in your browser. Export your README with one click, or authenticate to commit it directly to GitHub. Free to use with no limitations.

---

_Built with [ReadmeCodeGen](https://www.readmecodegen.com/) — AI-powered documentation tools for developers._
