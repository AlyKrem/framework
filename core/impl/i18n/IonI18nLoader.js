const I18nLoader = require('core/interfaces/I18nLoader');
const IonError = require('core/IonError');
const {
  merge, isConfig, processDir, processDirAsync, readConfig, readConfigAsync
} = require('core/util/read');
const path = require('path');

class IonI18nLoader extends I18nLoader {

  /**
   * @param {String} lang
   * @param {String} dir
   * @returns {Promise.<{}>}
   */
  _loadLanguage(lang, dir) {
    if (!lang || !dir)
      return Promise.reject(new IonError('Required arguments are not specified'));

    const msgDir = path.join(dir, lang);
    if (!msgDir.startsWith(dir)) {
      return Promise.reject(new IonError(`Incorrect language "${lang}"`));
    }
    let base;
    try {
      base = require(msgDir);
    } catch (err) {
      // Do nothing
    }
    base = base || {};
    return processDirAsync(msgDir, isConfig)
      .then(files => Promise.all(files.map(fn => readConfigAsync(fn))))
      .then((messages) => {
        base = messages.reduce((baseAcc, msg) => merge(baseAcc, msg), base);
        return base;
      });
  }

  /**
   * @param {String} lang
   * @param {String} dir
   * @returns {{}}
   */
  _loadLanguageSync(lang, dir) {
    if (!lang || !dir)
      return;

    const msgDir = path.join(dir, lang);
    if (!msgDir.startsWith(dir)) {
      throw new IonError(`Incorrect language "${lang}"`);
    }
    let base;
    try {
      base = require(msgDir);
    } catch (err) {
      // Do nothing
    }
    base = base || {};

    const onFile = (fn) => {
      const messages = readConfig(fn);
      base = merge(base, messages);
    };

    processDir(msgDir, isConfig, onFile, null, false);
    return base;
  }

}

module.exports = IonI18nLoader;
