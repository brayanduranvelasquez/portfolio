"use client";

import { IntlProvider } from 'react-intl';
import { usePathname } from 'next/navigation';

import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';

const messages = {
  en: enMessages,
  es: esMessages,
};

const IntlProviderWrapper = ({ children }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const validLocale = ['en', 'es'].includes(locale) ? locale : 'en';

  return (
    <IntlProvider locale={validLocale} messages={messages[validLocale]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;