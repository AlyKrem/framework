class I18nLoader {
  /**
   * @param {String} lang
   * @param {String} dir
   * @returns {Promise.<{}>}
   */
  loadLanguage(lang, dir) {
    return this._loadLanguage(lang, dir);
  }

  /**
   * @param {String} lang
   * @param {String} dir
   * @returns {{}}
   */
  loadLanguageSync(lang, dir) {
    return this._loadLanguageSync(lang, dir); // eslint-disable-line no-sync
  }
}

module.exports = I18nLoader;
