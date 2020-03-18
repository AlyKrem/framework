const I18nLoader = require('core/impl/i18n/IonI18nLoader');
const {toAbsolute} = require('core/system');
const strings = require('core/strings');

const sources = new Set();
const i18nLoader = new I18nLoader();

/**
 * @param {String} lang
 * @param {String} dir
 * @param {String} [prefix]
 * @param {Logger} [log]
 * @returns {Promise}
 */
function i18nSetup(lang, dir, prefix, log) {
  if (!lang || !dir)
    return Promise.resolve();

  prefix = prefix || 'i18n';
  const absDir = toAbsolute(dir);
  sources.add(absDir);
  return i18nLoader.loadLanguage(lang, absDir)
    .then((base) => {
      strings.registerBase(prefix, base, lang);
      log && log.info(`i18n settings for language "${lang}" registered from path "${dir}"`);
    })
    .catch(() => {
      log && log.info(`Base for language "${lang}" does not exist in path "${dir}"`);
    });
}

/**
 * @param {String} lang
 * @param {String} dir
 * @param {String} [prefix]
 * @param {Logger} [log]
 */
function i18nSetupSync(lang, dir, prefix, log) {
  if (!lang || !dir)
    return;

  prefix = prefix || 'i18n';
  const absDir = toAbsolute(dir);
  sources.add(absDir);
  try {
    const base = i18nLoader.loadLanguageSync(lang, absDir); // eslint-disable-line no-sync
    strings.registerBase(prefix, base, lang);
    log && log.info(`i18n settings for language "${lang}" registered from path "${dir}"`);
  } catch (err) {
    if (err.code === 'ENOENT')
      log && log.info(`Base for language "${lang}" does not exist in path "${dir}"`);
  }
}

/**
 * @param {String} lang
 * @param {String} [prefix]
 * @param {Logger} [log]
 */
function setupLang(lang, prefix, log) {
  prefix = prefix || 'i18n';
  for (const dir of sources) {
    try {
      const base = i18nLoader.loadLanguageSync(lang, dir); // eslint-disable-line no-sync
      strings.registerLang(lang, prefix, base);
      log && log.info(`i18n settings for language "${lang}" registered from path "${dir}"`);
    } catch (err) {
      // Do nothing
    }
  }
}

module.exports = i18nSetupSync;
module.exports.i18nSetup = i18nSetup;
module.exports.i18nSetupSync = i18nSetupSync; // eslint-disable-line no-sync
module.exports.setupLang = setupLang;
