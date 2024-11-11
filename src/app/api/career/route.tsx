'use server'
/* eslint-disable @typescript-eslint/no-explicit-any */


import clientPromises from '../../lib/adminDbConnect';

// Use memory storage to store the file as a buffer


export async function POST(request: Request) {
  try {
    
    // Get a client connection to MongoDB
    const client = await clientPromises();
    const db = client.db('userFeedback');
    const formData = await request.json()
    // Save to MongoDB
    const result = await db.collection('careerRequest').insertOne(formData);
    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding application:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
