import { Hero } from './components/Hero'

function App() {
  return (
    <main className="mx-auto min-h-screen w-[90%] max-w-[702px] ">
      <Hero
        Title="Git Tracker!"
        description="Git tracker is a user-friendly app that displays the git commit history of this current project. It encourages well-defined commits and regular updates, promoting clarity and seamless collaboration within your team."
      />
    </main>
  )
}

export default App
