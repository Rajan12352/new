# AI Chatbot Setup Guide

## 🤖 ChatGPT-4 Powered AI Assistant

AutoGrow includes a fully integrated AI chatbot powered by OpenAI's ChatGPT-4 model.

## ✨ Features

- **ChatGPT-4 Integration** - Powered by OpenAI's latest model
- **Responsive Design** - Works perfectly on mobile and desktop
- **Fast Responses** - Optimized for quick replies
- **Conversation History** - Maintains context throughout the chat
- **Beautiful UI** - Modern, animated interface
- **Always Accessible** - Fixed bottom-right position on all pages

## 🚀 Quick Setup

### 1. Get OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to **API Keys** section
4. Click **Create new secret key**
5. Copy your API key (starts with `sk-`)

### 2. Configure Environment Variable

Add to your `.env.local` file:

```bash
OPENAI_API_KEY=sk-your-actual-api-key-here
```

⚠️ **Important:** Never commit your `.env.local` file to version control!

### 3. Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

## 📋 How It Works

### User Flow

1. User clicks the chat bubble icon (bottom-right)
2. Chat window opens with welcome message
3. User types a message and presses Enter or clicks Send
4. Message is sent to ChatGPT-4 API
5. AI responds with helpful information
6. Conversation continues with full context

### Technical Flow

```
User Message
    ↓
Frontend (React Component)
    ↓
API Route (/api/chat)
    ↓
OpenAI ChatGPT-4
    ↓
AI Response
    ↓
Display in Chat
```

## 🎨 UI Features

### Chat Button
- Fixed position: bottom-right corner
- Gradient background (primary to secondary)
- Smooth animations
- Hover effects

### Chat Window
- Responsive size (600px height, max 80vh)
- Message bubbles with timestamps
- User/AI avatar icons
- Loading indicator
- Smooth scrolling

### Messages
- **User messages**: Right-aligned, primary color
- **AI messages**: Left-aligned, card background
- **Timestamps**: Small, muted text
- **Loading**: Animated spinner

## ⚙️ Customization

### Change AI Personality

Edit `/app/api/chat/route.ts`:

```typescript
{
  role: "system",
  content: `Your custom instructions here...`
}
```

### Adjust Response Length

```typescript
max_tokens: 500, // Change this number
```

### Change Model

```typescript
model: "gpt-4", // or "gpt-3.5-turbo" for faster/cheaper
```

## 💰 Pricing

OpenAI charges per token used:

- **GPT-4**: ~$0.03 per 1K tokens (input) + $0.06 per 1K tokens (output)
- **GPT-3.5-Turbo**: ~$0.001 per 1K tokens (much cheaper)

**Estimate:** ~$0.05-0.10 per conversation with GPT-4

### Cost Optimization Tips

1. Use GPT-3.5-Turbo for general queries
2. Limit `max_tokens` to reduce response length
3. Implement rate limiting
4. Cache common responses
5. Monitor usage in OpenAI dashboard

## 🔒 Security

### Best Practices

✅ **DO:**
- Store API key in environment variables
- Use server-side API routes only
- Implement rate limiting
- Monitor API usage
- Set spending limits in OpenAI dashboard

❌ **DON'T:**
- Expose API key in client-side code
- Commit `.env.local` to Git
- Share API keys publicly
- Allow unlimited requests

### Rate Limiting (Optional)

Add to `/app/api/chat/route.ts`:

```typescript
// Simple rate limiting example
const userRequests = new Map();

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const userLimit = userRequests.get(ip);
  
  if (userLimit && now - userLimit < 5000) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }
  
  userRequests.set(ip, now);
  // ... rest of code
}
```

## 📊 Monitoring

### Check Usage

1. Visit [OpenAI Usage Dashboard](https://platform.openai.com/usage)
2. View requests, tokens, and costs
3. Set up billing alerts

### Set Spending Limits

1. Go to **Billing** → **Usage limits**
2. Set monthly budget cap
3. Enable email notifications

## 🐛 Troubleshooting

### "OpenAI API key not configured"

**Solution:** Add `OPENAI_API_KEY` to `.env.local` and restart server

### "Failed to get response from AI"

**Possible causes:**
- Invalid API key
- Insufficient credits
- Rate limit exceeded
- Network issues

**Solution:** Check OpenAI dashboard for errors

### Slow Responses

**Solutions:**
- Switch to GPT-3.5-Turbo (faster)
- Reduce `max_tokens`
- Check internet connection
- Verify OpenAI service status

### Chat not appearing

**Solution:** 
- Clear browser cache
- Check console for errors
- Verify component is imported in layout

## 🎯 Features Included

- ✅ Real-time chat interface
- ✅ Conversation history
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Timestamp display
- ✅ Enter key to send
- ✅ Auto-scroll to latest message
- ✅ Mobile-friendly

## 📱 Mobile Optimization

- Responsive width (full width on mobile)
- Touch-friendly buttons
- Optimized height for small screens
- Smooth animations
- Keyboard-aware scrolling

## 🔄 Future Enhancements

Potential improvements:

- [ ] Voice input/output
- [ ] File attachments
- [ ] Message reactions
- [ ] Conversation export
- [ ] Multi-language support
- [ ] Suggested responses
- [ ] Typing indicators
- [ ] Read receipts
- [ ] Chat history persistence
- [ ] User authentication integration

## 📚 API Reference

### POST `/api/chat`

**Request:**
```json
{
  "message": "How do I create a workflow?",
  "conversationHistory": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi! How can I help?" }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "reply": "To create a workflow..."
}
```

**Error Response:**
```json
{
  "error": "Error message",
  "details": "Detailed error info"
}
```

## 🌐 Live Demo

The chatbot is now live on all pages at the bottom-right corner!

**Try it:**
1. Visit any page on your site
2. Click the chat bubble icon
3. Start chatting with AutoGrow AI

## 📝 Notes

- Chatbot appears on ALL pages (landing, dashboard, etc.)
- Conversation resets when chat window is closed
- Uses ChatGPT-4 by default (can switch to 3.5-Turbo)
- Fully responsive and mobile-friendly
- Professional, modern design

## 🆘 Support

For issues or questions:
- Check OpenAI documentation
- Review console errors
- Verify API key is valid
- Check OpenAI service status

---

**Powered by OpenAI ChatGPT-4** 🤖✨
