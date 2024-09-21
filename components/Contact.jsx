import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="get-in-touch" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
          </div>
          <Input placeholder="Subject" />
          <Textarea placeholder="Your Message" rows={6} />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-12 flex justify-center space-x-6">
          <Button variant="outline" className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Discord
          </Button>
          <Button variant="outline" className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </section>
  )
}