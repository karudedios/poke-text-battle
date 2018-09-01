export default {
  findComponent(moduleName) {
    return import(`components/${moduleName}`)
      .then(({ default: module }) => module);
  },
};
