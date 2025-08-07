import { NextResponse } from 'next/server'

// Mock agents database
const agents = [
  {
    id: '1',
    name: 'ResearchAgent',
    type: 'Research',
    description: 'Conducts comprehensive research across multiple data sources',
    rating: 4.8,
    deployments: 156,
    status: 'active',
    capabilities: ['Web scraping', 'Data analysis', 'Report generation'],
    version: '2.1.0'
  },
  {
    id: '2',
    name: 'PlannerAgent',
    type: 'Planning',
    description: 'Creates strategic project plans and roadmaps',
    rating: 4.9,
    deployments: 89,
    status: 'active',
    capabilities: ['Timeline creation', 'Resource allocation', 'Risk assessment'],
    version: '1.8.2'
  },
  {
    id: '3',
    name: 'SynthAgent',
    type: 'Synthesis',
    description: 'Combines and synthesizes information from multiple sources',
    rating: 4.7,
    deployments: 124,
    status: 'active',
    capabilities: ['Pattern recognition', 'Data fusion', 'Insight generation'],
    version: '2.0.0'
  },
  {
    id: '4',
    name: 'EvaluatorAgent',
    type: 'Evaluation',
    description: 'Assesses quality and provides detailed feedback',
    rating: 4.6,
    deployments: 67,
    status: 'active',
    capabilities: ['Quality scoring', 'Benchmarking', 'Performance metrics'],
    version: '1.5.3'
  },
  {
    id: '5',
    name: 'ContentAgent',
    type: 'Content',
    description: 'Generates high-quality content for various purposes',
    rating: 4.9,
    deployments: 203,
    status: 'active',
    capabilities: ['Writing', 'Editing', 'SEO optimization'],
    version: '3.0.1'
  },
  {
    id: '6',
    name: 'DataAgent',
    type: 'Data',
    description: 'Processes and analyzes complex datasets',
    rating: 4.5,
    deployments: 45,
    status: 'training',
    capabilities: ['Data cleaning', 'Statistical analysis', 'Visualization'],
    version: '0.9.0'
  }
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: agents,
      total: agents.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch agents' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 })
}