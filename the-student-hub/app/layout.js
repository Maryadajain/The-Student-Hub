// File: app/layout.js
import './globals.css'
import Navbar from '../components/Navbar' // <-- Add this line

export const metadata = {
  title: 'The Student Hub',
  description: 'By the Students, For the Students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* <-- Add this line */}
        <main>{children}</main>
      </body>
    </html>
  )
}
