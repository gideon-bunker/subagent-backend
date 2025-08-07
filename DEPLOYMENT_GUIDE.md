# SubAgent Backend Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named: `subagent-backend`
3. Make it public or private (your choice)
4. DO NOT initialize with README (we already have one)
5. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands in the subagent-backend directory:

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/subagent-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard
1. Go to https://vercel.com/new
2. Import your `subagent-backend` repository
3. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./ (leave as is)
   - Build Settings: (leave defaults)
4. Add Environment Variables (optional):
   - `DATABASE_URL` (if you have a database)
5. Click "Deploy"

### Option B: Deploy via CLI
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy
vercel

# Follow prompts to link to your Vercel account
```

## Step 4: Get Your Backend URL

After deployment, Vercel will give you a URL like:
- `https://subagent-backend-xxx.vercel.app`

Save this URL - you'll need it for the frontend!

## Step 5: Update ClaudeStack UI

In your ClaudeStack UI project, update the environment variables:

### For Vercel Dashboard:
1. Go to your ClaudeStack UI project in Vercel
2. Settings → Environment Variables
3. Add/Update:
   ```
   NEXT_PUBLIC_BACKEND_URL=https://subagent-backend-xxx.vercel.app
   NEXT_PUBLIC_API_URL=https://subagent-backend-xxx.vercel.app/api
   ```
4. Redeploy ClaudeStack UI

### For Local Development:
Update `.env.local` in ClaudeStack UI:
```env
NEXT_PUBLIC_BACKEND_URL=https://subagent-backend-xxx.vercel.app
NEXT_PUBLIC_API_URL=https://subagent-backend-xxx.vercel.app/api
```

## API Endpoints

Your backend provides these endpoints:

- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/agents` - List all agents
- `POST /api/agents/[id]/deploy` - Deploy an agent
- `GET /api/agents/[id]/status` - Get agent status
- `GET /api/training/sessions` - List training sessions
- `POST /api/training/start` - Start new training

## Testing

Visit your backend URL to see the status page:
```
https://subagent-backend-xxx.vercel.app
```

Test an API endpoint:
```
https://subagent-backend-xxx.vercel.app/api/agents
```

## Troubleshooting

### CORS Issues
The backend is configured to accept requests from any origin. If you have CORS issues:
1. Check the next.config.js file
2. Ensure your frontend includes credentials in requests

### 404 Errors
Make sure the API routes are in the correct structure:
```
app/
  api/
    projects/
      route.ts
    agents/
      route.ts
      [id]/
        deploy/
          route.ts
```

### Build Errors
Run locally first to check for errors:
```bash
npm install
npm run build
```

## Next Steps

1. Replace mock data with real database
2. Add authentication
3. Implement real agent execution
4. Add WebSocket support for real-time updates