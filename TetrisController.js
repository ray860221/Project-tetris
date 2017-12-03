var TetrisController = function(model, view){
	var tetrisview = view;
	var tetrismodel = model;

	this.userHasKeyDown = function(){
	}

	this.start = function(){
	}

};

var model = new TetrisModel();
var view = new TetrisView(model);
var controller = new TetrisController(model, view);

controller.start();
