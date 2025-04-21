
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

const beneficios = [
  "Complete álbuns digitais e desbloqueie conquistas exclusivas",
  "Receba bônus ao colecionar séries especiais ou completar páginas",
  "Negocie suas figurinhas NFT livremente no marketplace",
  "Transparência, segurança e propriedade garantidas pela blockchain",
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 py-8 cyberpunk-card">
      <CyberpunkHeading size="xl" animated>
        Sobre o Projeto
      </CyberpunkHeading>
      <p className="mt-4 text-lg text-white/90">
        O GoINFT é uma plataforma onde fãs de futebol colecionam figurinhas digitais (NFTs) de seus atletas favoritos.
        Preencha seu álbum digital, negocie cards com outros usuários e receba recompensas ao completar coleções!
      </p>
      <CyberpunkHeading size="md" variant="gradient" className="mt-8">
        Como Funciona?
      </CyberpunkHeading>
      <ul className="mt-2 space-y-3 pl-6 list-disc text-white/80">
        {beneficios.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <CyberpunkHeading size="md" className="mt-8" variant="gradient">
        Compra e Venda de NFTs
      </CyberpunkHeading>
      <p className="mt-2 text-white/80">
        As figurinhas digitais (NFTs) podem ser adquiridas em pacotes, trocadas entre usuários ou negociadas no marketplace.
        O valor de cada NFT varia de acordo com a raridade, popularidade e status de cada jogador.
      </p>
    </div>
  );
}
