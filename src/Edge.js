//#include 'Entity.js'

var CanvizEdge = exports.CanvizEdge = function(name, canviz, rootGraph, parentGraph, tailNode, headNode) {
    CanvizEntity.call(this, 'edgeAttrs', name, canviz, rootGraph, parentGraph, parentGraph);
    this.tailNode = tailNode;
    this.headNode = headNode;
};
_.extend(CanvizEdge.prototype, CanvizEntity.prototype, {
	escStringMatchRe: /\\([EGTHL])/g,
    draw: function() {
        CanvizEntity.prototype.draw.apply(this, arguments);
    }
});
