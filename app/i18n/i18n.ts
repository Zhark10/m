import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./en")
const ru = require("./ru")

i18n.fallbacks = true
i18n.translations = { en, ru }

// i18n.locale = Localization.locale || "ru"
i18n.locale = "ru"
