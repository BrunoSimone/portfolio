import type { Metadata } from "next";

const cases: Record<string, { title: string; description: string }> = {
  jubigestor: {
    title: "JubiGestor | Caso de estudio",
    description:
      "Caso de estudio de JubiGestor, un asistente accesible con IA para trámites jubilatorios desarrollado por Bruno Simone.",
  },
  canela: {
    title: "Canela Store | Caso de estudio",
    description:
      "Caso de estudio de Canela Store, catálogo de artesanías desarrollado con Next.js, Sanity CMS y TypeScript.",
  },
  portfolio: {
    title: "Portfolio de Bruno Simone | Caso de estudio",
    description:
      "Decisiones de UX, UI y desarrollo detrás del portfolio inspirado en Google Search y Wikipedia.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = cases[slug];

  if (!study) {
    return { title: "Proyecto no encontrado", robots: { index: false } };
  }

  return {
    ...study,
    alternates: { canonical: `/case/${slug}` },
  };
}

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
