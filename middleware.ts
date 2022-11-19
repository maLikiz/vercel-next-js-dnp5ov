// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('middleware');
  // const token = request.body.token || request.query.token || request.headers['x-access-token'];
  const token = 'testToken';
  console.log({ token });

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, "testSecret", function (err, decoded) {
      if (err) {
        return new NextResponse(
          JSON.stringify({ success: false, message: 'authentication failed' }),
          { status: 401, headers: { 'content-type': 'application/json' } }
        );
      }

      // request.decoded = decoded;
    });
  } else {
    // if there is no token
    // return an error
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    );
  }
}

//
export const config = {
  matcher: '/api/:path*',
};