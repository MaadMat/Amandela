'use server'
//@typescript-eslint/no-explicit-any
import clientPromises from '../../../lib/adminDbConnect';

export async function GET() {
  try {
    const client = await clientPromises();
    const db = client.db('userFeedback'); // Your database name
    const cards = await db.collection('suggestedCards').find({}).toArray();
    return new Response(JSON.stringify(cards), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching cards:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
