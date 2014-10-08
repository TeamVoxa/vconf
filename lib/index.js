var
  colors = require('colors'),
  nconf = require('nconf'),
  path = require('path');

VConf.prototype = nconf;
VConf.prototype.initManaged = initManaged;
VConf.prototype.loadFile = loadFile;

module.exports = VConf;

function VConf(globalPath, envPath, packagePath) {
  var
    env = this.get('NODE_ENV') || 'localhost';

  console.log('Loading argv and env configuration...'.blue);
  this.argv().env();

  if (!env) {
    console.log('No NODE_ENV found, using localhost...'.blue);
  }

  this.loadFile('environment', path.join(envPath, env + '-conf.json'));
  this.loadFile('global', path.join(globalPath, 'config.json'));
  this.loadFile('package-file', path.join(packagePath, 'package.json'));
}

function initManaged(cb) { cb(); }

function loadFile(configType, filePath) {
  console.log(('Loading config file ' + filePath + '...').blue);
  this.file(configType, filePath);
}