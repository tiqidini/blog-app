import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Временное хранилище постов (в реальном приложении здесь будет база данных)
let posts: any[] = [];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  try {
    const post = await request.json();
    posts.push(post);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
} 