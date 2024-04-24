const sampleVectors = [
	{ id: '1', values: [32.4, 74.1, 3.2], metadata: { url: '/products/sku/13913913' } },
	{ id: '2', values: [15.1, 19.2, 15.8], metadata: { url: '/products/sku/10148191' } },
	{ id: '3', values: [0.16, 1.2, 3.8], metadata: { url: '/products/sku/97913813' } },
	{ id: '4', values: [75.1, 67.1, 29.9], metadata: { url: '/products/sku/418313' } },
	{ id: '5', values: [58.8, 6.7, 3.4], metadata: { url: '/products/sku/55519183' } },
];

export async function onRequest(context) {
  let path = new URL(context.request.url).pathname;
  if (path.startsWith("/favicon")) {
    return new Response('', { status: 404 });
  }

  // You only need to insert vectors into your index once
  if (path.startsWith("/insert")) {
    // Insert some sample vectors into your index
    // In a real application, these vectors would be the output of a machine learning (ML) model,
    // such as Workers AI, OpenAI, or Cohere.
    let inserted = await context.env.VECTORIZE_INDEX.insert(sampleVectors);

    // Return the number of IDs we successfully inserted
    return Response.json(inserted);
  }
}