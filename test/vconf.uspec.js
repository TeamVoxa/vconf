describe('vconf', function() {
  var
    VConf = require('../lib'),
    globalPath = __dirname + '/support/',
    envPath = __dirname + '/support/env/',
    packagePath = __dirname + '/../',
    vconf = new VConf(globalPath, envPath, packagePath);

  it('should exist as a constructor function', function() {
    expect(typeof VConf).to.equal('function');
  });

  describe('constructor', function() {

    it('should make the global config data', function() {
      expect(vconf.get('foo:bar:baz')).to.be.true;
      expect(vconf.get('session:secret')).to.equal('ponies!');
    });

    it('should load the environment config data', function() {
      expect(vconf.get('port')).to.equal(8076);
    });

    it('should load the environment config data, overriding global config data', function() {
      expect(vconf.get('protocol')).to.equal('https-localoverride');
    });

    it('should load the package.json data', function() {
      expect(vconf.get('author')).to.equal('TeamVoxa');
    });
  });
});