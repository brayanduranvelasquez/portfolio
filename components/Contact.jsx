"use client"

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FormattedMessage } from 'react-intl';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const params = useParams();
  const { locale } = params;

  const onSubmit = (data) => {
    setLoading(true); // Activar loading al enviar
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, {
      message: data.message,
      to_name: 'Brayan',
      from_name: data.email,
    }, process.env.NEXT_PUBLIC_EMAIL_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset();
        setSuccessMessage(locale === 'es' ? 'Tu mensaje fue enviado correctamente. No tardaré en responder :)' : 'Your message was sent successfully. I will get back to you as soon as possible :)');

      }, (err) => {
        console.error('FAILED...', err);
        setSuccessMessage(locale === 'es' ? 'Hubo un error al enviar tu mensaje.' : 'There was an error sending your message.');
      })
      .finally(() => {
        setLoading(false); // Desactivar loading después de la respuesta
      });
  };

  // Definir los placeholders según el locale
  const placeholders = {
    name: locale === 'es' ? "Tu Nombre" : "Your Name",
    email: locale === 'es' ? "Tu Correo Electrónico" : "Your Email",
    message: locale === 'es' ? "Tu Mensaje" : "Your Message",
  };

  return (
    <section id="get-in-touch" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <FormattedMessage id="contact_title" />
      </h2>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Input
                disabled={loading}
                placeholder={placeholders.name}
                {...register('name', { required: locale === 'es' ? 'Este campo es obligatorio' : 'This field is required' })}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div>
              <Input
                type="email"
                disabled={loading}
                placeholder={placeholders.email}
                {...register('email', {
                  required: locale === 'es' ? 'Este campo es obligatorio' : 'This field is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: locale === 'es' ? 'El formato del correo no es válido' : 'Invalid email format'
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
          </div>
          <div>
            <Textarea
              disabled={loading}
              placeholder={placeholders.message}
              rows={6}
              {...register('message', { required: locale === 'es' ? 'Este campo es obligatorio' : 'This field is required' })}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
              </>
            ) : (
              <FormattedMessage id="contact_send_button" />
            )}
          </Button>
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
            <FormattedMessage id="contact_discord_button" />
          </Button>
          <Button variant="outline" className="flex items-center" onClick={() => window.location.href = 'mailto:brayan13s133@gmail.com'}>
            <Mail className="mr-2 h-4 w-4" />
            <FormattedMessage id="contact_email_button" />
          </Button>
        </div>
      </div>
    </section>
  );
}