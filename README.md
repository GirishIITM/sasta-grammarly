# Sasta Grammarly

A simple, self-hosted grammar corrector that uses Google's Gemini API to correct your text.

## Features

- Corrects grammar of text from the clipboard.
- Copies the corrected text back to the clipboard.
- Sends a desktop notification upon completion.
- Supports both Wayland and X11 environments.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- For Wayland users: `wl-clipboard`
- For X11 users: `xclip`

You also need a Google Generative AI API key. You can obtain one from [Google AI Studio](https://aistudio.google.com/).

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GirishIITM/sasta-grammarly.git
    cd sasta-grammarly
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a file named `.env` in the root of the project directory and add your API key as follows:
    ```
    API_KEY=YOUR_GOOGLE_API_KEY
    ```
    Replace `YOUR_GOOGLE_API_KEY` with your actual Google Generative AI API key.

## Usage

This tool can be run from the command line. You can also create a keyboard shortcut to run the script for a seamless workflow.

### From the Command Line

1.  Copy the text you want to correct to your clipboard.
2.  Run the appropriate script for your environment:

    -   **For Wayland:**
        ```bash
        node index.mjs
        ```

    -   **For X11:**
        ```bash
        node xindex.mjs
        ```

3.  The corrected text will be automatically copied back to your clipboard.

### Setting up a Keyboard Shortcut

You can bind the command to a keyboard shortcut for quick and easy access. The method for setting a custom shortcut depends on your desktop environment (e.g., GNOME, KDE, XFCE).

Here are the commands you'll need to assign to a shortcut:

-   **For Wayland:**
    ```
    /usr/bin/node /path/to/your/project/index.mjs
    ```

-   **For X11:**
    ```
    /usr/bin/node /path/to/your/project/xindex.mjs
    ```

**Important:** Replace `/path/to/your/project/` with the absolute path to the `sasta-grammarly` directory on your system.

For example, in GNOME, you can set a custom shortcut by going to `Settings > Keyboard > Keyboard Shortcuts > Custom Shortcuts` and adding a new shortcut with the appropriate command.

## How It Works

The script takes the text from your clipboard, sends it to the Google Gemini API for grammar correction, and then replaces the content of your clipboard with the corrected text. A notification is displayed to confirm that the operation was successful.
