// client/app/api/prescriptions/route.ts
export async function POST(req: Request) {
    const res = await fetch(`${process.env.NEST_API_URL}/prescriptions`, {
      method: 'POST',
      body: JSON.stringify(await req.json()),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.get('Authorization') || ''
      }
    });
    return res;
  }