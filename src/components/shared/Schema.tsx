
interface SchemaProps {
  schema: any;
  id: string;
}

export function Schema({ schema, id }: SchemaProps) {
  if (!schema) return null;
  return (
    <script
      id={`schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
