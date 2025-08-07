export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>SubAgent Backend API</h1>
      <p>This is the backend API for SubAgent - AI Agent Orchestration Platform</p>
      
      <h2>Available Endpoints:</h2>
      <ul>
        <li>GET /api/projects - Fetch all projects</li>
        <li>POST /api/projects - Create new project</li>
        <li>GET /api/agents - Fetch all agents</li>
        <li>POST /api/agents/[id]/deploy - Deploy an agent</li>
        <li>GET /api/agents/[id]/status - Get agent status</li>
        <li>GET /api/training/sessions - Fetch training sessions</li>
        <li>POST /api/training/start - Start training session</li>
      </ul>
      
      <p>Status: <strong style={{ color: 'green' }}>Running</strong></p>
    </div>
  )
}