import { NextRequest, NextResponse } from 'next/server'

// Mock database for projects
let projects = [
  {
    id: '1',
    title: 'Q4 Marketing Campaign',
    type: 'Campaign',
    goal: 'Increase brand awareness',
    deadline: '2025-03-31',
    status: 'active',
    agents: ['ResearchAgent', 'PlannerAgent', 'ContentAgent'],
    progress: 65,
    createdAt: new Date().toISOString()
  }
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: projects
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const newProject = {
      id: Math.random().toString(36).substr(2, 9),
      title: body.title,
      type: body.type,
      goal: body.goal,
      deadline: body.deadline,
      agents: body.agents || [],
      deliverables: body.deliverables || [],
      metrics: body.metrics || '',
      status: 'planning',
      progress: 0,
      createdAt: new Date().toISOString()
    }
    
    projects.push(newProject)
    
    return NextResponse.json({
      success: true,
      data: newProject,
      message: 'Project created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 })
}