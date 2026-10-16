
interface SchemaProps {
  schema: any;
  id: string;
}

export function Schema({ schema, id }: SchemaProps) {
  if (!schema) return null;
  // Google retired FAQ and HowTo rich-result appearances; keep those stripped.
  // Product + Offer JSON-LD is emitted (e.g. /pricing) without Review/AggregateRating.
  if (['FAQPage', 'HowTo'].includes(schema['@type'])) return null;
  return (
    <script
      id={`schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
