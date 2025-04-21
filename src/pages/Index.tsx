
import { AppNeonMockup } from "@/components/ui/app-neon-mockup";

// Fundo de cidade inspirado nas imagens de referência
const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background city cyberpunk como nas imagens */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Fundo neon city com blur (cores roxas/azuis/rosas/verde) */}
        <img
          src="/lovable-uploads/4bc79dc8-db3d-44a1-86ce-a007db471702.png"
          alt="Futuristic Cyberpunk City"
          className="w-full h-full object-cover blur-[2.5px] saturate-[1.22] brightness-[0.7] opacity-90"
          style={{ objectPosition: "center 60%" }}
        />
        {/* Overlay degrade escurecedor para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e121aee] via-[#17163366] to-[#161825]/90" />
        {/* Reflexos no “chão” */}
        <div className="absolute bottom-0 left-1/4 w-[45vw] h-[10vh] rounded-full blur-2xl bg-neon-purple/30 opacity-40" />
        <div className="absolute right-1/3 bottom-2 w-[34vw] h-14 rounded-full blur-2xl bg-neon-blue/30 opacity-30" />
      </div>

      {/* App mockup central flutuando */}
      <AppNeonMockup className="z-20"/>

      {/* Figurinhas holográficas extras flutuando à direita/esquerda — inspiração arte 2 */}
      <div className="absolute top-12 left-7 hidden md:block z-30 animate-float" style={{animationDelay:"0.35s"}}>
        <img src="/lovable-uploads/725ebcdd-f459-45fc-a839-0fbc08a8e59d.png" alt="Hologram Sticker" className="w-24 h-32 rounded-lg shadow-[0_0_14px_7px_#00fff866] border-2 border-neon-blue/60 bg-cyber-dark/60 opacity-90"/>
      </div>
      <div className="absolute top-[42%] left-1 hidden md:block z-30 animate-float" style={{animationDelay:"0.7s"}}>
        <img src="/lovable-uploads/4bc79dc8-db3d-44a1-86ce-a007db471702.png" alt="Hologram Sticker" className="w-20 h-24 rounded-lg shadow-[0_0_12px_5px_#9b87f566] border-2 border-neon-purple/60 bg-cyber-dark/60 opacity-90"/>
      </div>
      <div className="absolute top-20 right-9 hidden md:block z-30 animate-float" style={{animationDelay:"0.6s"}}>
        <img src="https://placehold.co/120x155/dc143c/fff?text=ROMA+NFT" alt="Hologram Sticker" className="w-20 h-24 rounded-lg shadow-[0_0_14px_7px_#ff71e188] border-2 border-neon-pink/70 bg-cyber-dark/60 opacity-90"/>
      </div>
      <div className="absolute bottom-8 right-3 hidden md:block z-30 animate-float" style={{animationDelay:"0.5s"}}>
        <img src="https://placehold.co/120x150/263238/fff?text=PSG+NFT" alt="Hologram Sticker" className="w-20 h-24 rounded-lg shadow-[0_0_12px_5px_#00d9ffbb] border-2 border-neon-blue/70 bg-cyber-dark/60 opacity-80"/>
      </div>
      {/* Toque/holograma como na arte 2: mão artificial pode ser adicionada como imagem futura*/}

      {/* [Opcional] Overlay de gotículas de chuva na tela toda */}
      {/* <RainEffect dropColor="#a5baff" rainCount={80} className="mix-blend-lighten opacity-30 z-50"/> */}
    </div>
  );
};

export default Index;

