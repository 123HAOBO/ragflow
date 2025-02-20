import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_en from './en';
import translation_es from './es';
import translation_id from './id';
import translation_ja from './ja';
import { createTranslationTable, flattenObject } from './until';
import translation_vi from './vi';
import translation_zh from './zh';
import translation_zh_traditional from './zh-traditional';

const resources = {
  en: translation_en,
  zh: translation_zh,
  'zh-TRADITIONAL': translation_zh_traditional,
  id: translation_id,
  ja: translation_ja,
  es: translation_es,
  vi: translation_vi,
};
const enFlattened = flattenObject(translation_en);
const viFlattened = flattenObject(translation_vi);
const esFlattened = flattenObject(translation_es);
const zhFlattened = flattenObject(translation_zh);
const jaFlattened = flattenObject(translation_ja);
const zh_traditionalFlattened = flattenObject(translation_zh_traditional);
export const translationTable = createTranslationTable(
  [
    enFlattened,
    viFlattened,
    esFlattened,
    zhFlattened,
    zh_traditionalFlattened,
    jaFlattened,
  ],
  ['English', 'Vietnamese', 'Spanish', 'zh', 'zh-TRADITIONAL', 'ja'],
);
i18n.use(initReactI18next).init({
  detection: {
    // 禁用所有语言检测功能
    enabled: false,
  },
  lng: 'zh', // 强制使用简体中文，若需要繁体中文则设置为 'zh-TRADITIONAL'
  supportedLngs: ['zh', 'zh-TRADITIONAL'],
  resources,
  fallbackLng: 'zh', // 如果有未知错误，默认回退为中文
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
