import { NextResponse } from 'next/server'

// Mock training sessions
const trainingSessions = [
  {
    id: '1',
    agentName: 'SalesExpertAgent',
    specialty: 'Research',
    status: 'completed',
    progress: 100,
    startedAt: '2025-01-05T10:00:00Z',
    completedAt: '2025-01-05T11:30:00Z',
    filesCount: 12,
    accuracy: 94.5
  },
  {
    id: '2',
    agentName: 'MarketAnalyst',
    specialty: 'Synthesis',
    status: 'training',
    progress: 65,
    startedAt: '2025-01-06T14:30:00Z',
    filesCount: 8,
    accuracy: null
  }
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: trainingSessions
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch training sessions' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 })
}