import { createI18n } from "vue-i18n";
import en from "./en.json";
import fr from "./fr.json";
import kr from "./kr.json";
const i18n = createI18n ({
  llegacy: false,
  globalInjection: true,
  locale: "fr",
  messages: {
    en,
    fr,
    kr
  }
})
export default i18n;