# How to Deploy AutoGrow to Vercel

Since this is a Next.js application, **Vercel** is the best place to deploy it. It's free, fast, and requires zero configuration.

## Prerequisites

1.  **GitHub Account**: You need to have your code on GitHub.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com) using your GitHub account.

## Step 1: Push Your Code to GitHub

If you haven't already pushed your code to GitHub, do this first:

1.  Create a new repository on GitHub.
2.  Run these commands in your terminal (if you haven't initialized git yet):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

## Step 2: Import to Vercel

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  You will see a list of your GitHub repositories. Find your `autogrow` repository and click **"Import"**.

## Step 3: Configure Environment Variables (CRITICAL)

**⚠️ IMPORTANT:** Your contact form will NOT work if you skip this step!

On the "Configure Project" screen, look for the **"Environment Variables"** section. You need to add the same variables from your `.env.local` file:

| Key | Value |
| :--- | :--- |
| `GMAIL_USER` | `autogrow13@gmail.com` |
| `GMAIL_PASS` | `cqsc rbnn laay phxl` |

1.  Enter `GMAIL_USER` as the key and `autogrow13@gmail.com` as the value. Click **Add**.
2.  Enter `GMAIL_PASS` as the key and `cqsc rbnn laay phxl` as the value. Click **Add**.

## Step 4: Deploy

1.  Click the big **"Deploy"** button.
2.  Wait for a minute or two. Vercel will build your site.
3.  Once done, you will see a "Congratulations!" screen with a link to your live site (e.g., `https://autogrow-xyz.vercel.app`).

## Troubleshooting

-   **Email not sending?** Check your Vercel Environment Variables. If you changed your App Password, you must update it in Vercel (Settings -> Environment Variables) and redeploy.
-   **Build fails?** Check the "Logs" tab in Vercel for error messages.
