import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { NextResponse } from "next/server";

import { API_URL } from "@/lib/secrets";

export async function POST(req: Request, res: Response) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if(!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await axios.post(`${API_URL}/course/create`, {
        userId,
        title,
    });
    return NextResponse.json(course.data);

  } catch (error) {
    console.log('[COURSES] post', error);
  }
}