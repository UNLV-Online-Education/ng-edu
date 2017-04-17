export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2-edu.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.edu',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/router': 'ng.router',
    'rxjs/Observable': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype'
  }
}
