describe('vconf', function() {
  var
    vConf = require('../lib'),
    globalPath = __dirname + '/support/',
    envPath = __dirname + '/support/env/',
    packagePath = __dirname + '/../',
    vconf = vConf({
      global: globalPath,
      environment: envPath,
      package: packagePath
    });

  it('should exist as a function', function() {
    expect(typeof vConf).to.equal('function');
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

  it('should return a singleton once constructed', function() {
    expect(vConf()).to.equal(vconf);
  });
});