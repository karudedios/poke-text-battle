const extractDefault = ({ default: module }) => module;

export default {
  findComponent(moduleName) {
    return import(`components/${moduleName}`).then(extractDefault);
  },

  findContainer(moduleName) {
    return import(`containers/${moduleName}`).then(extractDefault);
  },
};
