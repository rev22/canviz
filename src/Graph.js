//#include 'Entity.js'
//#include 'path/Rect.js'

var CanvizGraph = exports.CanvizGraph = function(name, canviz, rootGraph, parentGraph) {
    CanvizEntity.call(this, 'attrs', name, canviz, rootGraph, parentGraph, this);

    this.nodeAttrs = {};
    this.edgeAttrs = {};
    this.nodes = [];
    this.edges = [];
    this.subgraphs = [];
};

_.extend(CanvizGraph.prototype, CanvizEntity.prototype, {
	initBB: function() {
		var coords = this.getAttr('bb').split(',');
		this.bbRect = new Rect(coords[0], this.canviz.height - coords[1], coords[2], this.canviz.height - coords[3]);
	},
	draw: function(ctx, ctxScale, redrawCanvasOnly) {
		CanvizEntity.prototype.draw.call(this, ctx, ctxScale, redrawCanvasOnly);
		_.each([this.subgraphs, this.nodes, this.edges], function(type) {
			_.each(type, function(entity) {
				entity.draw(ctx, ctxScale, redrawCanvasOnly);
			});
		});
	},
	escStringMatchRe: /\\([GL])/g
});
