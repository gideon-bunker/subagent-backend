import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const agentId = params.id
    
    // Mock agent status
    const status = {
      id: agentId,
      name: `Agent-${agentId}`,
      status: 'active',
      health: 'healthy',
      uptime: '99.9%',
      lastActive: new Date().toISOString(),
      metrics: {
        requests: 1234,
        successRate: 98.5,
        avgResponseTime: '1.2s',
        errors: 15
      },
      deployments: [
        {
          id: 'dep-1',
          environment: 'production',
          status: 'running',
          startedAt: '2025-01-01T00:00:00Z'
        }
      ]
    }
    
    return NextResponse.json({
      success: true,
      data: status
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to get agent status' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 })
}