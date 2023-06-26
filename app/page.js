import { GameProvider } from '@/context/gameProvider'
import Board from './components/Board'
import Counter from './components/Counter'
import Timer from './components/Timer'

export default function Home() {
  return (
    <GameProvider>
      <main className="flex flex-col w-full min-h-screen items-center justify-center">
        <section className="w-full">
          <Counter/>
        </section>
        <section className='flex justify-center items-center w-full'>
          <Timer/>
        </section>
        <section className="p-8 w-full flex items-center justify-center">
          <Board/>
        </section>
      </main>
    </GameProvider>
  )
}
