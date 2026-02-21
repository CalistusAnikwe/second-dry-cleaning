import { createClient, type QueryParams } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you need statically generated pages to update instantly
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}
