'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FormattedMessage } from 'react-intl';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState({ text: '', isError: false });
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { locale } = params;

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          message: data.message,
          to_name: 'Brayan',
          from_name: data.email,
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        reset();
        setMessage({
          text:
            locale === 'es'
              ? 'Tu mensaje fue enviado correctamente. No tardaré en responder :)'
              : 'Your message was sent successfully. I will get back to you as soon as possible :)',
          isError: false,
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setMessage({
          text:
            locale === 'es'
              ? 'Oh, algo ha pasado :( sin embargo, igual puedes contactarme usando los botones de abajo!'
              : 'Oh, something went wrong :( however you can also contact me using the buttons below!',
          isError: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const placeholders = {
    name: locale === 'es' ? 'Tu Nombre' : 'Your Name',
    email: locale === 'es' ? 'Tu Correo Electrónico' : 'Your Email',
    message: locale === 'es' ? 'Tu Mensaje' : 'Your Message',
  };

  return (
    <AnimatedSection>
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
                  {...register('name', {
                    required: locale === 'es' ? 'Este campo es obligatorio' : 'This field is required',
                  })}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm" role="alert">
                    {errors.name.message}
                  </span>
                )}
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
                      message: locale === 'es' ? 'El formato del correo no es válido' : 'Invalid email format',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <Textarea
                disabled={loading}
                placeholder={placeholders.message}
                rows={6}
                {...register('message', {
                  required: locale === 'es' ? 'Este campo es obligatorio' : 'This field is required',
                })}
                aria-invalid={errors.message ? 'true' : 'false'}
              />
              {errors.message && (
                <span className="text-red-500 text-sm" role="alert">
                  {errors.message.message}
                </span>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  <span className="sr-only">
                    <FormattedMessage id="contact_sending" />
                  </span>
                </>
              ) : (
                <FormattedMessage id="contact_send_button" />
              )}
            </Button>
          </form>

          {/* Custom Alert using Tailwind CSS */}
          {message.text && (
            <div
              className={`mt-4 p-4 rounded-md border ${
                message.isError
                  ? 'bg-red-100 border-red-400 text-red-700'
                  : 'bg-green-100 border-green-400 text-green-700'
              }`}
            >
              <p>{message.text}</p>
            </div>
          )}

          <div className="mt-12 flex justify-center space-x-6">
            <Button
              variant="outline"
              className="flex items-center"
              onClick={() => (window.location.href = 'https://discord.com/users/1030571217423433799')}
            >
              <Mail className="mr-2 h-4 w-4" />
              <FormattedMessage id="contact_discord_button" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center"
              onClick={() => (window.location.href = 'mailto:brayan13s133@gmail.com')}
            >
              <Mail className="mr-2 h-4 w-4" />
              <FormattedMessage id="contact_email_button" />
            </Button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
