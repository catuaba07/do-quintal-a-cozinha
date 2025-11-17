"use client";

import { PageHeader } from "@/components/page-header";
import dynamic from "next/dynamic";

interface Territory {
  name: string;
  coordinates: [number, number];
  description?: string;
}

interface TerritoryMapProps {
  territories: Territory[];
  center?: [number, number];
  zoom?: number;
}

// Dynamically import the map to avoid SSR issues
const DynamicMap = dynamic<TerritoryMapProps>(
  () => import("@/components/territory-map").then((mod) => mod.TerritoryMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] rounded-lg bg-gray-200 animate-pulse flex items-center justify-center">
        <p className="text-gray-500">Carregando mapa...</p>
      </div>
    ),
  }
);

const territories = [
  {
    name: "Município de Salgado",
    coordinates: [-10.2667, -37.4833] as [number, number],
    description: "Território com representatividade do MMTR-SE",
  },
  {
    name: "Vitória da União",
    coordinates: [-10.3167, -37.5167] as [number, number],
    description: "Território com representatividade do MMTR-SE",
  },
];

export default function OndeEstamos() {
  return (
    <>
      <PageHeader
        title="Onde Estamos"
        subtitle="Territórios de atuação do MMTR-SE"
        backgroundImage="/mmtr-sobre-1.webp"
      />

      {/* Subheader with territory information */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
        <div className="container-wrapper">
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {territories.map((territory, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-purple-600 mb-2">
                    {territory.name}
                  </h3>
                  <p className="text-gray-600">{territory.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="container-wrapper">
        <div className="container flex flex-col gap-6 py-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Nossos Territórios
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  O MMTR-SE está presente em diversos territórios do estado de Sergipe,
                  fortalecendo a organização das mulheres trabalhadoras rurais e
                  promovendo o feminismo rural a partir de suas realidades locais.
                </p>

                <p>
                  Atualmente, o movimento tem representatividade nos municípios de{" "}
                  <strong>Salgado</strong> e <strong>Vitória da União</strong>,
                  onde desenvolve atividades de formação política, organização
                  comunitária e luta pelos direitos das mulheres do campo.
                </p>
              </div>

              {/* Map Section */}
              <div className="my-8">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  Mapa dos Territórios
                </h3>
                <DynamicMap
                  territories={territories}
                  center={[-10.2917, -37.5]}
                  zoom={11}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Clique nos marcadores para ver mais informações sobre cada território.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
