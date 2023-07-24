import { Hero } from './components/Hero'
import { Tracker } from './components/Tracker'

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[768px] ">
      <Hero
        Title="Git Tracker!"
        description="Git tracker is a user-friendly app that displays the git commit history of this current project. It encourages well-defined commits and regular updates, promoting clarity and seamless collaboration within your team."
      />
      <Tracker />
    </main>
  )
}

export default App
