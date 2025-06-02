import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Fallback to 'ko' if locale is undefined or not supported
  const supportedLocales = ['ko', 'en'];
  const validLocale = locale && supportedLocales.includes(locale) ? locale : 'ko';
  
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
}); 