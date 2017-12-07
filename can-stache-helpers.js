var namespace = require('can-namespace');

namespace.stache = namespace.stache || {};

if (namespace.stache.helpers) {
	throw new Error("You can't have two versions of can-stache-helpers, check your dependencies");
} else {
	module.exports = namespace.stache.helpers = {};
}

