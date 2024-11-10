'use server';
import clientPromises from '../../lib/adminDbConnect';

export async function POST(request: Request) {
  try {
    const client = await clientPromises();
    const db = client.db('userFeedback');
    const cardData = await request.json();

    const result = await db.collection('careerRequest').insertOne(cardData);
    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding card:', error);
    console.log(error)
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
