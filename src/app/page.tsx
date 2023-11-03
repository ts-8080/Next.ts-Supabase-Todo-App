import TodoApp from '@/components/TodoApp'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <head>
        <title>Next Todo App</title>
      </head>

    <section className='flex justify-center items-center h-screen'>
      <TodoApp />
    </section>
    </div>
  )
}
