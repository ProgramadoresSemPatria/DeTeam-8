import { useLocale, useTranslations } from 'next-intl';
import LocaleSwicherSelect from './LocaleSwicherSelect';
import { locales } from '@/config';

export default function LocaleSwicher() {
  const t = useTranslations("LocaleSwicher");
  const locale = useLocale();
  // Helper function to get locale display names directly
  const getLocaleDisplayName = (localeCode: string) => {
    switch(localeCode) {
      case 'pt-br': return 'Portuguese';
      case 'en': return 'English';
      default: return localeCode;
    }
  };

  return (
    <LocaleSwicherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {getLocaleDisplayName(cur)}
        </option>
      ))}
    </LocaleSwicherSelect>
  );
}