import { cn } from '@/lib/utils'

export default function Layout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return (
    <main className="min-h-screen flex flex-col">

      <section className="flex flex-1">
        <div className={cn('container mx-auto', className)}>
          {children}
        </div>
      </section>

    </main>
  )
}
