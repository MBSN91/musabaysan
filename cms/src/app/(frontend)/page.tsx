import { redirect } from 'next/navigation'

// The site lives at musabaysan.nl; this app is only the editor.
export default function Page() {
  redirect('/admin')
}
