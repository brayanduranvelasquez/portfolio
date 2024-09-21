import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, {
      message: data.message,
      to_name: "Brayan",
      from_name: data.email
    }, process.env.NEXT_PUBLIC_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset();
        setSuccessMessage('Tu mensaje fue enviado correctamente.');
      }, (err) => {
        console.error('FAILED...', err);
        setSuccessMessage('Hubo un error al enviar tu mensaje.');
      });
  };

  return (
    <section id="get-in-touch" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Input 
                placeholder="Your Name" 
                {...register('name', { required: 'Este campo es obligatorio' })} 
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                {...register('email', { 
                  required: 'Este campo es obligatorio', 
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'El formato del correo no es válido'
                  }
                })} 
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              rows={6} 
              {...register('message', { required: 'Este campo es obligatorio' })} 
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}

        <div className="mt-12 flex justify-center space-x-6">
          <Button variant="outline" className="flex items-center" onClick={() => window.location.href = 'https://discord.com/users/1030571217423433799'}>
            <Mail className="mr-2 h-4 w-4" />
            Discord
          </Button>
          <Button variant="outline" className="flex items-center" onClick={() => window.location.href = 'mailto:brayan13s133@gmail.com'}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </section>
  );
}