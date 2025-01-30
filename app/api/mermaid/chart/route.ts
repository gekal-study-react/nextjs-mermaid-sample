import {NextResponse} from 'next/server';

export async function GET(req: Request) {
  console.log(`method: ${req.method}`);
  console.log(`path: ${req.url}`);

  const mermaidChart = `
    graph TD;
      A[Start] --> B{Is it working?};
      B -->|Yes| C[Finish];
      B -->|No| D[Fix it];
      D --> B;
  `;

  return NextResponse.json({text: mermaidChart}, {status: 200});
}