import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil profesional y proyectos",
  description:
    "Experiencia, proyectos, tecnologías y formas de contacto de Bruno Simone, Full-Stack Developer.",
  alternates: { canonical: "/search" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
