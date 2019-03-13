var app = this.app || {};

(function(module) {
  var _sidebar;
  var _map;
  var _colorFilter;

  function init() {
    _sidebar     = new module.Sidebar();
    _map         = new module.Map(_sidebar);
    _colorFilter = new module.ColorFilter(_map);

    _sidebar.showDefault();

    fetch('../data/trees.json')
      .then(function(response) {
        return response.json().then(function(trees) {
          setData(trees);
        });
      });
  }

  function setData(trees) {
    _map.setTrees(trees, module.palettes['name_common']);
    document.getElementById('loading').classList.add('hidden');
  }

  // EXPORTS
  module.init = init;
  module.setData = setData;

})(app);
