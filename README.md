# Purpose
Unlike Chrome password autofill, this extension automatically *submits* the login credentials it fills. This means that when a UBC service is opened, it immediately begins the chain of 2FA redirects, and brings you to your content sooner.

This is particularly useful if your browser is set to automatically launch a site such as Canvas.
(see below)

![image](https://github.com/user-attachments/assets/59124a9b-e714-4c21-9573-d9483d5c9510)
# Installation
1. Clone the repo or download [just the /src](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fmunr0%2FUBC-AutoLogin%2Ftree%2Fmain%2Fsrc)
   - unzip the `src` folder if applicable
1. Follow this [video](https://www.youtube.com/watch?v=dhaGRJvJAII&t=64s) or the steps below
   1. Go to `chrome://extensions/`
   1. Enable `developer mode` in the top-right
   1. Click `load unpacked` in the top-left
   1. Select the downloaded `src` folder
   1. The extension should now appear in the extension menu
1. See below for steps to set up login credentials
# Usage
This utility will automatically log you into **SAMail**, **iPeer**, and **authentication.ubc.ca** (and all the sites that use it – such as Canvas and Workday).

#### To configure your CWL for these sites:
1. Click the 🧩 icon in the top-right corner of your browser
2. Select UBC AutoLogin
3. Enter your CWL in the popup and hit save

Your CWL is saved locally on your machine as a key–value pair, obfuscated with a single-char key and a looped base64-encoded string value.
