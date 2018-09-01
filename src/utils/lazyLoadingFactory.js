export default {
  cache: new Map(),

  has(moduleName) {
    return this.cache.has(moduleName);
  },

  get(moduleName) {
    return this.cache.get(moduleName);
  },

  findComponent(moduleName) {
    if (this.has(moduleName)) return this.get(moduleName);

    return import(`components/${moduleName}`)
      .then(({ default: module }) => {
        this.cache.set(moduleName, module);
        return module;
      });
  },
};
