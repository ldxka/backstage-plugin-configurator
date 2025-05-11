// app/page.tsx

import TagSelector from "@/components/TagSelector";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Backstage Plugin Configurator
      </h1>
      <TagSelector />
    </main>
  );
}
