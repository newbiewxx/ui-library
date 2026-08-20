export const componentInstall = com => {
  com.install = (app, options = {}) => {
    app.component(com.name || options.name, com);
  };

  return com;
};
