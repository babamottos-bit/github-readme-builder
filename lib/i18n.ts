export const locales = ['en', 'ar', 'fr', 'es', 'pt', 'de', 'it', 'nl', 'tr', 'ru', 'zh', 'ja', 'ko', 'hi', 'ur', 'id', 'ms', 'sw', 'fa', 'he'] as const
export type Locale = (typeof locales)[number]

export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl' },
  { code: 'fr', name: 'French', nativeName: 'Français', direction: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', direction: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', direction: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', direction: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', direction: 'ltr' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', direction: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', direction: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', direction: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', direction: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', direction: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', direction: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', direction: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', direction: 'rtl' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', direction: 'ltr' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', direction: 'ltr' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', direction: 'ltr' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', direction: 'rtl' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', direction: 'rtl' },
] as const
export const messages = {
  en: { nav: { jobs: 'Find work', talent: 'Find talent', services: 'Services', companies: 'Companies' }, hero: { title: 'Find the work that moves you.' } },
  ar: { nav: { jobs: 'ابحث عن عمل', talent: 'ابحث عن المواهب', services: 'الخدمات', companies: 'الشركات' }, hero: { title: 'اعثر على العمل الذي يحرّكك.' } },
  fr: { nav: { jobs: 'Trouver un emploi', talent: 'Trouver des talents', services: 'Services', companies: 'Entreprises' }, hero: { title: 'Trouvez le travail qui vous fait avancer.' } },
} as const
export function getDirection(locale: Locale) { return locale === 'ar' ? 'rtl' : 'ltr' }
