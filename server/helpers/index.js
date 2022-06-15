const applyRoutes = (routes = [], app = {}) => {
  routes.forEach((route) => {
    const {method, path, handlers} = route;
    app[method](path, handlers);
  });
};

export default {
  applyRoutes
};
