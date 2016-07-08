/**
 * Created by Vasiliy Ermilov (email: inkz@xakep.ru, telegram: @inkz1) on 08.04.16.
 */
'use strict';

/**
 * @constructor
 */
function MetaRepository() {

  // MetaRepository

  /**
   *
   * @param {String} name
   * @param {String} [version]
   * @returns {ClassMeta}
   */
  this.getMeta = function (name,version, namespace) {
    return this._getMeta(name, version, namespace);
  };

  /**
   *
   * @param {String} ancestor
   * @param {String} [version]
   * @param {Boolean} [direct]
   * @returns {ClassMeta[]}
   */
  this.listMeta = function (ancestor, version, direct, namespace) {
    return this._listMeta(ancestor, version, direct, namespace);
  };

  /**
   * @param {String} classname
   * @param {String} [version]
   * @returns {ClassMeta}
   */
  this.ancestor = function (classname, version, namespace) {
    return this._ancestor(classname, version, namespace);
  };

  /**
   * @param {String} classname
   * @param {String} [version]
   * @returns {Object[]}
   */
  this.propertyMetas = function (classname, version, namespace) {
    return this._propertyMetas(classname, version, namespace);
  };

  // NavigationRepository

  /**
   * @returns {Object[]}
   */
  this.getNavigationSections = function (namespace) {
    return this._getNavigationSections(namespace);
  };

  /**
   * @param {String} code
   * @returns {Object | null}
   */
  this.getNavigationSection = function (code, namespace) {
    return this._getNavigationSection(code, namespace);
  };

  /**
   * @param {String} code
   * @returns {Object | null}
   */
  this.getNode = function (code, namespace) {
    return this._getNode(code);
  };

  /**
   * @param {String} sections
   * @returns {Object[]}
   */
  this.getNodes = function (sections, parent, namespace) {
    return this._getNodes(sections, parent);
  };

  /**
   * @param {String} className
   * @returns {Object | null}
   */
  this.getNodeForClassname = function (className, namespace) {
    return this._getNodeForClassname(className, namespace);
  };

  // ViewModelRepository

  /**
   * @param {String} className
   * @param {String} node
   * @returns {Object | null}
   */
  this.getListViewModel = function (className, node, namespace) {
    return this._getListViewModel(className, node, namespace);
  };

  /**
   * @param {String} className
   * @param {String} collection
   * @param {String} node
   * @returns {Object | null}
   */
  this.getCollectionViewModel = function (className, collection, node, namespace) {
    return this._getCollectionViewModel(className, collection, node, namespace);
  };

  /**
   * @param {String} className
   * @param {String} node
   * @returns {Object | null}
   */
  this.getItemViewModel = function (className, node, namespace) {
    return this._getItemViewModel(className, node, namespace);
  };

  /**
   * @param {String} className
   * @param {String} node
   * @returns {Object | null}
   */
  this.getCreationViewModel = function (className, node, namespace) {
    return this._getCreationViewModel(className, node, namespace);
  };

  /**
   * @param {String} className
   * @param {String} node
   * @returns {Object | null}
   */
  this.getDetailViewModel = function (className, node, namespace) {
    return this._getDetailViewModel(className, node, namespace);
  };

  /**
   * @param {String} name
   * @returns {Object | null}
   */
  this.getMask = function (name) {
    return this._getMask(name);
  };

  /**
   * @returns {Object[]}
   */
  this.getValidators = function () {
    return this._getValidators();
  };

  /**
   * @returns {Promise}
   */
  this.init = function () {
    return this._init();
  };
}

module.exports = MetaRepository;
