import Hero from "@/app/components/Hero/index.jsx"
import Servicos from "./components/Serviços/Servicos"
import Contato from "./components/Contato/Contato"
export default function Home() {
  return (
    <div>
      <Hero />
      <Servicos />
      <Contato />
    </div>
  )
}