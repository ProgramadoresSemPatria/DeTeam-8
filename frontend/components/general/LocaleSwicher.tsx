import { useLocale, useTranslations } from 'next-intl';
import LocaleSwicherSelect from './LocaleSwicherSelect';
import { locales } from '@/config';

export default function LocaleSwicher() {
  const t = useTranslations("LocaleSwicher");
  const locale = useLocale();
  // Helper function to get locale display names directly
  const getLocaleDisplayName = (localeCode: string) => {
    switch(localeCode) {
      case 'en': return 'English';
      case 'pt-br': return 'Portuguese';
      case 'es': return 'Spanish';
      case 'fr': return 'French';
      default: return localeCode;
    }
  };

  return (
    <LocaleSwicherSelect defaultValues={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {getLocaleDisplayName(cur)}
        </option>
      ))}
    </LocaleSwicherSelect>
  );
}