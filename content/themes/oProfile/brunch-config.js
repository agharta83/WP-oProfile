// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {
    joinTo: {
      'css/app.css': /^app/,
      'css/vendor.css': /^node_modules/
    }
  }
};

exports.plugins = {
  copycat: {
    "fonts": ["node_modules/font-awesome/fonts"]
  },
  browerSync: {
    files: ["*"]
  }
};

exports.npm = {
  enabled: true,
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  },
  styles: {
    "normalize.css": ["normalize.css"],
    "font-awesome": ["css/font-awesome.css"]
  }
};
