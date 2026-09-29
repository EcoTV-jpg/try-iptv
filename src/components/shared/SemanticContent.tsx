
interface Props {
  primaryEntity: string
  relatedEntities: string[]
  semanticClusters: string[][]
  contextualKeywords: string[]
}

export default function SemanticContent({ 
  primaryEntity: _primaryEntity,
  relatedEntities: _relatedEntities,
  semanticClusters: _semanticClusters,
  contextualKeywords: _contextualKeywords 
}: Props) {
  // Removed hidden SEO doorway text per Human-First Search Essentials
  return null;
}

    