import QUnit from 'steal-qunit';
import plugin from './can-stache-helpers';

QUnit.module('can-stache-helpers');

QUnit.test('Initialized the plugin', function(assert) {
  assert.equal(typeof plugin, 'function');
  assert.equal(plugin(), 'This is the can-stache-helpers plugin');
});
