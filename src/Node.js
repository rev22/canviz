//#include 'Entity.js'

var CanvizNode = exports.CanvizNode = function(name, canviz, rootGraph, parentGraph) {
    CanvizEntity.call(this, 'nodeAttrs', name, canviz, rootGraph, parentGraph, parentGraph);
};

_.extend(CanvizNode.prototype, CanvizEntity.prototype, {
	escStringMatchRe: /\\([NGL])/g
});
