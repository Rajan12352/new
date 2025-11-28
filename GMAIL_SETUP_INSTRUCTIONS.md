# Gmail App Password Setup Instructions

## Why You Need This

Gmail **blocks** regular passwords for third-party applications for security reasons. You must generate an **App Password** to allow the contact form to send emails.

## Step-by-Step Instructions

### 1. Enable 2-Step Verification (Required)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with `autogrow13@gmail.com`
3. Find **"2-Step Verification"** section
4. Click **"Get Started"** and follow the prompts
5. Complete the setup (you'll need your phone)

### 2. Generate App Password

1. After enabling 2-Step Verification, go back to [Security Settings](https://myaccount.google.com/security)
2. Search for **"App passwords"** in the search bar at the top
3. Click on **"App passwords"**
4. You may need to sign in again
5. Select:
   - **App**: Choose "Mail"
   - **Device**: Choose "Other (Custom name)"
   - Enter name: "AutoGrow Website"
6. Click **"Generate"**
7. Google will show you a **16-character password** like: `abcd efgh ijkl mnop`
8. **COPY THIS PASSWORD** (you won't be able to see it again!)

### 3. Update .env.local File

1. Open the file `/Volumes/Extreme SSD/new/.env.local`
2. Replace `YOUR_APP_PASSWORD_HERE` with the 16-character password
3. The file should look like this:

```env
GMAIL_USER=autogrow13@gmail.com
GMAIL_PASS=abcdefghijklmnop
```

**Note**: Remove all spaces from the password when pasting it.

### 4. Restart the Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### 5. Test the Contact Form

Go to `http://localhost:3000` and try submitting the contact form. You should now receive emails!

## Troubleshooting

**If you still get errors:**

1. Make sure you copied the App Password correctly (no spaces)
2. Make sure 2-Step Verification is enabled
3. Check the server logs for specific error messages
4. Try generating a new App Password

## Security Note

- **Never share** your App Password publicly
- The `.env.local` file is already in `.gitignore` (won't be committed to git)
- You can revoke App Passwords anytime from Google Account settings
