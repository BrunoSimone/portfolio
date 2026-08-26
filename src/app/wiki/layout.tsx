import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trayectoria profesional",
  description:
    "Trayectoria, experiencia, formación y perfil técnico de Bruno Simone, Full-Stack Developer en Mar del Plata.",
  alternates: { canonical: "/wiki" },
};

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
