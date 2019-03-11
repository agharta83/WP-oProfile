// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {
    joinTo: {
      'css/app.css': /^app/,
      'css/vendor.css': /^node_modules/
    }
  },
  javascripts: {
    joinTo: {
      'js/app.js': /^app/,
      'js/vendor.js': /^(?!app)/
    }
  }
};

exports.plugins = {
  sass: {
    options: {
      includePaths: ['node_modules/font-awesome/scss']
    }
  },
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

exports.modules = {
  // J'ajoute require('initialize) automatiquement dans js/app.js
  autoRequire: {
    'js/app.js': ['initialize']
  }
};
