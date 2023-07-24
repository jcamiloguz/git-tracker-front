import { Toaster } from 'react-hot-toast'
import { Hero } from './components/Hero'
import { Tracker } from './components/Tracker'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="mx-auto min-h-screen w-full max-w-[768px] ">
        <Hero
          Title="Git Tracker!"
          description="Git tracker is a user-friendly app that displays the git commit history of this current project. It encourages well-defined commits and regular updates, promoting clarity and seamless collaboration within your team."
        />
        <Tracker />
        <Toaster position="bottom-center" />
      </main>
    </QueryClientProvider>
  )
}

export default App
