import './globals.css'
import Header from '@/components/Header'

type Props = {
  children: React.ReactNode
}

const metadata = {
  title: 'Image Gallery',
  description: 'Image Gallery made with Next.js and Tailwind CSS using Pexels API',
  keywords: 'Image Gallery, Next.js, Tailwind CSS, Pexels API',
  author: 'Coder Suresh, CoderSuresh'
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout