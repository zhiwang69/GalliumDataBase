$("#ddItemIO1").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemIO2").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemIO3").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemIO4").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemIO5").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemSG1").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemSG2").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemSG3").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemAB1").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemAB2").on("click", function (e) {
    e.preventDefault(); 
});
$("#ddItemPC1").on("click", function (e) {
    e.preventDefault(); 
});

const setDefaultEdgeStyle = (graph) => {
    const style = graph.getStylesheet().getDefaultEdgeStyle();
    Object.assign(style, {
        [mxConstants.STYLE_ROUNDED]: true, // 设置线条拐弯处为圆角
        [mxConstants.STYLE_STROKEWIDTH]: '3',
        [mxConstants.STYLE_STROKECOLOR]: '#333333',
        [mxConstants.STYLE_EDGE]: mxConstants.EDGESTYLE_ORTHOGONAL,// 设置折线
        [mxConstants.STYLE_FONTCOLOR]: '#33333',
        [mxConstants.STYLE_LABEL_BACKGROUNDCOLOR]: '#ffa94d',
    });

    graph.connectionHandler.createEdgeState = function () {
        const edge = this.createEdge();
        return new mxCellState(graph.view, edge, graph.getCellStyle(edge));
    };
};
const putVertexStyle = (graph) => {

    const TitleVertexStyleIO = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_RECTANGLE,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_CENTER,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILLCOLOR]: '#4E73DF',
        [mxConstants.STYLE_STROKECOLOR]: 'none',
        [mxConstants.STYLE_FONTCOLOR]: '#FFFFFF',
        [mxConstants.STYLE_ROUNDED]: true,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '14',
        [mxConstants.STYLE_FONTSTYLE]: 1,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 0,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_SPACING]: 0,
        [mxConstants.STYLE_POINTER_EVENTS]: false,
    };
    graph.getStylesheet().putCellStyle('TitleVertexIO', TitleVertexStyleIO);

    const BodyVertexStyle = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_LABEL,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_CENTER,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILLCOLOR]: 'white',
        [mxConstants.STYLE_GRADIENTCOLOR]: '#EEEEEE',
        [mxConstants.STYLE_STROKECOLOR]: 'gray',
        [mxConstants.STYLE_FONTCOLOR]: '#FFFFFF',
        [mxConstants.STYLE_ROUNDED]: false,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '1',
        [mxConstants.STYLE_FONTSTYLE]: 0,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 0,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_STROKEWIDTH]: 1,
        [mxConstants.STYLE_SPACING]: 0,
        [mxConstants.STYLE_IMAGE_ALIGN]: mxConstants.ALIGN_CENTER,
        [mxConstants.STYLE_IMAGE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_IMAGE_WIDTH]: '92',
        [mxConstants.STYLE_IMAGE_HEIGHT]: '61',
    };
    graph.getStylesheet().putCellStyle('BodyVertex', BodyVertexStyle);

    const TitleVertexStyleSG = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_RECTANGLE,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_CENTER,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILLCOLOR]: '#D17B0F',
        [mxConstants.STYLE_STROKECOLOR]: 'none',
        [mxConstants.STYLE_FONTCOLOR]: '#FFFFFF',
        [mxConstants.STYLE_ROUNDED]: true,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '14',
        [mxConstants.STYLE_FONTSTYLE]: 1,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 0,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_SPACING]: 0,
    };
    graph.getStylesheet().putCellStyle('TitleVertexSG', TitleVertexStyleSG);

    const TitleVertexStyleAB = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_RECTANGLE,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_CENTER,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILLCOLOR]: '#1F7A8C',
        [mxConstants.STYLE_STROKECOLOR]: 'none',
        [mxConstants.STYLE_FONTCOLOR]: '#FFFFFF',
        [mxConstants.STYLE_ROUNDED]: true,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '14',
        [mxConstants.STYLE_FONTSTYLE]: 1,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 0,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_SPACING]: 0,
    };
    graph.getStylesheet().putCellStyle('TitleVertexAB', TitleVertexStyleAB);

    const TitleVertexStylePC = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_RECTANGLE,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_CENTER,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILLCOLOR]: '#022B3A',
        [mxConstants.STYLE_STROKECOLOR]: 'none',
        [mxConstants.STYLE_FONTCOLOR]: '#FFFFFF',
        [mxConstants.STYLE_ROUNDED]: true,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '14',
        [mxConstants.STYLE_FONTSTYLE]: 1,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 0,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_SPACING]: 0,
    };
    graph.getStylesheet().putCellStyle('TitleVertexPC', TitleVertexStylePC);

    const HeaderVertexStyle = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_RECTANGLE,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_LEFT,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILL_OPACITY]: 0,
        [mxConstants.STYLE_STROKECOLOR]: 'none',
        [mxConstants.STYLE_FONTCOLOR]: '#000000',
        [mxConstants.STYLE_ROUNDED]: true,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '14',
        [mxConstants.STYLE_FONTSTYLE]: 0,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 0,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_SPACING]: 0,
        [mxConstants.STYLE_POINTER_EVENTS]: false,
    };
    graph.getStylesheet().putCellStyle('HeaderVertex', HeaderVertexStyle);

    const InputVertexStyle = {
        [mxConstants.STYLE_SHAPE]: mxConstants.SHAPE_RECTANGLE,
        [mxConstants.STYLE_PERIMETER]: mxPerimeter.RectanglePerimeter,
        [mxConstants.STYLE_ALIGN]: mxConstants.ALIGN_LEFT,
        [mxConstants.STYLE_VERTICAL_ALIGN]: mxConstants.ALIGN_MIDDLE,
        [mxConstants.STYLE_FILLCOLOR]: '#FFFFFF',
        [mxConstants.STYLE_STROKECOLOR]: '#000000',
        [mxConstants.STYLE_FONTCOLOR]: '#000000',
        [mxConstants.STYLE_ROUNDED]: true,
        [mxConstants.STYLE_OPACITY]: '100',
        [mxConstants.STYLE_FONTSIZE]: '14',
        [mxConstants.STYLE_FONTSTYLE]: 0,
        [mxConstants.STYLE_RESIZABLE]: 0,
        [mxConstants.STYLE_EDITABLE]: 1,
        [mxConstants.STYLE_STROKEWIDTH]: 1,
        [mxConstants.STYLE_SHADOW]: false,
        [mxConstants.STYLE_SPACING]: 3,
        [mxConstants.STYLE_OVERFLOW]: 'hidden',
    };
    graph.getStylesheet().putCellStyle('InputID', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputFilename', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputVacElement', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputImpElement', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputPercent', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputExtraParam', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputAlgo', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputGenBatch', InputVertexStyle);
    graph.getStylesheet().putCellStyle('InputMillerIndex', InputVertexStyle);

};

mxShape.prototype.constraints = [
    new mxConnectionConstraint(new mxPoint(0.5, 0), true),
    new mxConnectionConstraint(new mxPoint(0, 0.5), true),
    new mxConnectionConstraint(new mxPoint(1, 0.5), true),
    new mxConnectionConstraint(new mxPoint(0.5, 1), true)
];
mxPolyline.prototype.constraints = null;

let container = document.getElementById('graphContainer');

// 禁用鼠标右键
mxConstants.DEFAULT_HOTSPOT = 0.5;
mxEvent.disableContextMenu(container);
const graph = new mxGraph(container);

graph.isPart = function (cell) {
    const state = this.view.getState(cell);
    const style = (state != null) ? state.style : this.getCellStyle(cell);
    return style['constituent'] == '1';
};

/**
 * Redirects start drag to parent.
 */
const getInitialCellForEvent = mxGraphHandler.prototype.getInitialCellForEvent;
mxGraphHandler.prototype.getInitialCellForEvent = function (me) {
    let cell = getInitialCellForEvent.apply(this, arguments);
    if (this.graph.isPart(cell)) {
        cell = this.graph.getModel().getParent(cell);
    }
    return cell;
};

// Redirects selection to parent
graph.selectCellForEvent = function (cell) {
    if (this.isPart(cell)) {
        mxGraph.prototype.selectCellForEvent.call(this, this.model.getParent(cell));
        return;
    }

    mxGraph.prototype.selectCellForEvent.apply(this, arguments);
};

// 内部cell 跟随 父cell 等比例缩放
//graph.recursiveResize = true;
//graph.addListener(mxEvent.CLICK, function (sender, evt) {
//  console.log(arguments);
//});

// 设置这个属性后节点之间才可以连接
graph.setConnectable(true);
graph.setAllowDanglingEdges(false);
graph.foldingEnabled = false;
graph.setEnterStopsCellEditing(true)
setDefaultEdgeStyle(graph);
putVertexStyle(graph);

// 开启区域选择
new mxRubberband(graph);

var keyHandler = new mxKeyHandler(graph);
keyHandler.bindKey(46, function (evt) {
    if (graph.isEnabled()) {
        graph.removeCells();
    }
});

const parent = graph.getDefaultParent();

// 判断drop是否有效
const dropGraph = function (evt) {
    const x = mxEvent.getClientX(evt);
    const y = mxEvent.getClientY(evt);
    // 获取 x,y 所在的元素
    const elt = document.elementFromPoint(x, y);
    // 如果鼠标落在graph容器
    if (mxUtils.isAncestorNode(graph.container, elt)) {
        return graph;
    }
    // 鼠标落在其他地方
    return null;
};
// Creates the element that is being for the actual preview.
var dragElt = document.createElement('div');
dragElt.style.border = 'dashed black 1px';
dragElt.style.width = '120px';
dragElt.style.height = '60px';

const ddItemIO1 = document.getElementById('ddItemIO1');
const functDropIO1 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleIO1', x, y, 240, 100, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '输入：结构（库）', 4, 4, 232, 20, 'constituent=1;TitleVertexIO');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '库编码', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
        var vertexHeader2 = graph.insertVertex(vertexBody, null, '百分比', 10, 70, 50, 20, 'constituent=1;HeaderVertex');
        var vertexInput1 = graph.insertVertex(vertexBody, null, ' ', 70, 40, 160, 20, 'constituent=1;InputID');
        var vertexInput2 = graph.insertVertex(vertexBody, null, ' ', 70, 70, 160, 20, 'constituent=1;InputPercent');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
        vertexHeader2.setConnectable(false);
        vertexInput1.setConnectable(false);
        vertexInput2.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsIO1 = mxUtils.makeDraggable(ddItemIO1, dropGraph, functDropIO1, dragElt);

const ddItemIO3 = document.getElementById('ddItemIO3');
const functDropIO3 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleIO3', x, y, 240, 100, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '输入：缺陷', 4, 4, 232, 20, 'constituent=1;TitleVertexIO');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '缺陷元素', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
        var vertexHeader2 = graph.insertVertex(vertexBody, null, '百分比', 10, 70, 50, 20, 'constituent=1;HeaderVertex');
        var vertexInput1 = graph.insertVertex(vertexBody, null, ' ', 70, 40, 160, 20, 'constituent=1;InputVacElement');
        var vertexInput2 = graph.insertVertex(vertexBody, null, ' ', 70, 70, 160, 20, 'constituent=1;InputPercent');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
        vertexHeader2.setConnectable(false);
        vertexInput1.setConnectable(false);
        vertexInput2.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsIO3 = mxUtils.makeDraggable(ddItemIO3, dropGraph, functDropIO3, dragElt);

const ddItemIO4 = document.getElementById('ddItemIO4');
const functDropIO4 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleIO4', x, y, 240, 100, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '输入：掺杂', 4, 4, 232, 20, 'constituent=1;TitleVertexIO');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '掺杂', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
        var vertexHeader2 = graph.insertVertex(vertexBody, null, '百分比', 10, 70, 50, 20, 'constituent=1;HeaderVertex');
        var vertexInput1 = graph.insertVertex(vertexBody, null, '替位元素:原位元素', 70, 40, 160, 20, 'constituent=1;InputImpElement');
        var vertexInput2 = graph.insertVertex(vertexBody, null, ' ', 70, 70, 160, 20, 'constituent=1;InputPercent');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
        vertexHeader2.setConnectable(false);
        vertexInput1.setConnectable(false);
        vertexInput2.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsIO4 = mxUtils.makeDraggable(ddItemIO4, dropGraph, functDropIO4, dragElt);

const ddItemIO5 = document.getElementById('ddItemIO5');
const functDropIO5 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleIO5', x, y, 240, 70, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '输入：计算参数', 4, 4, 232, 20, 'constituent=1;TitleVertexIO');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '额外参数', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
        var vertexInput1 = graph.insertVertex(vertexBody, null, 'key:value', 70, 40, 160, 20, 'constituent=1;InputExtraParam');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
        vertexInput1.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsIO5 = mxUtils.makeDraggable(ddItemIO5, dropGraph, functDropIO5, dragElt);

const ddItemSG1 = document.getElementById('ddItemSG1');
const functDropSG1 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleSG1', x, y, 240, 100, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '结构生成：掺杂/缺陷', 4, 4, 232, 20, 'constituent=1;TitleVertexSG');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '生成算法', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
        var vertexHeader2 = graph.insertVertex(vertexBody, null, '生成数量', 10, 70, 50, 20, 'constituent=1;HeaderVertex');
        var vertexInput1 = graph.insertVertex(vertexBody, null, ' ', 70, 40, 160, 20, 'constituent=1;InputAlgo');
        var vertexInput2 = graph.insertVertex(vertexBody, null, ' ', 70, 70, 160, 20, 'constituent=1;InputGenBatch');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
        vertexHeader2.setConnectable(false);
        vertexInput1.setConnectable(false);
        vertexInput2.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsSG1 = mxUtils.makeDraggable(ddItemSG1, dropGraph, functDropSG1, dragElt);

const ddItemSG2 = document.getElementById('ddItemSG2');
const functDropSG2 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleSG2', x, y, 240, 100, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '结构生成：合金/团簇', 4, 4, 232, 20, 'constituent=1;TitleVertexSG');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '生成算法', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
        var vertexHeader2 = graph.insertVertex(vertexBody, null, '生成数量', 10, 70, 50, 20, 'constituent=1;HeaderVertex');
        var vertexInput1 = graph.insertVertex(vertexBody, null, ' ', 70, 40, 160, 20, 'constituent=1;InputAlgo');
        var vertexInput2 = graph.insertVertex(vertexBody, null, ' ', 70, 70, 160, 20, 'constituent=1;InputGenBatch');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
        vertexHeader2.setConnectable(false);
        vertexInput1.setConnectable(false);
        vertexInput2.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsSG2 = mxUtils.makeDraggable(ddItemSG2, dropGraph, functDropSG2, dragElt);

/*const ddItemSG3 = document.getElementById('ddItemSG3');
const functDropSG3 = function (graph, evt, cell, x, y) {
  var parent = graph.getDefaultParent();
  graph.getModel().beginUpdate();
  try {
    var vertexBody = graph.insertVertex(parent, null, 'moduleSG3', x, y, 300, 100, 'BodyVertex');
    var vertexTitle = graph.insertVertex(vertexBody, null, '结构生成：表面/界面', 4, 4, 232, 20, 'constituent=1;TitleVertexSG');
    var vertexHeader1 = graph.insertVertex(vertexBody, null, '界面密勒指数', 10, 40, 50, 20, 'constituent=1;HeaderVertex');
    var vertexHeader2 = graph.insertVertex(vertexBody, null, '生成数量', 10, 70, 50, 20, 'constituent=1;HeaderVertex');
    var vertexInput1 = graph.insertVertex(vertexBody, null, '[第一种材料hkl]/[第二种材料hkl]', 100, 40, 200, 20, 'constituent=1;InputMillerIndex');
    var vertexInput2 = graph.insertVertex(vertexBody, null, ' ', 100, 70, 200, 20, 'constituent=1;InputGenBatch');
    vertexTitle.setConnectable(false);
    vertexHeader1.setConnectable(false);
    vertexHeader2.setConnectable(false);
    vertexInput1.setConnectable(false);
    vertexInput2.setConnectable(false);
  }
  finally {
    graph.getModel().endUpdate();
  }
}
const dsSG3 = mxUtils.makeDraggable(ddItemSG3, dropGraph, functDropSG3, dragElt);*/

const ddItemAB1 = document.getElementById('ddItemAB1');
const functDropAB1 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'moduleAB1', x, y, 240, 120, 'BodyVertex;image=../assets/vasp_logo_alpha.png');
        var vertexTitle = graph.insertVertex(vertexBody, null, '电子态计算：VASP', 4, 4, 232, 20, 'constituent=1;TitleVertexAB');
        var vertexHeader1 = graph.insertVertex(vertexBody, null, '请使用输入参数模组传入额外参数', 12, 95, 50, 20, 'constituent=1;HeaderVertex');
        vertexTitle.setConnectable(false);
        vertexHeader1.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsAB1 = mxUtils.makeDraggable(ddItemAB1, dropGraph, functDropAB1, dragElt);

const ddItemPC1 = document.getElementById('ddItemPC1');
const functDropPC1 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'modulePC1', x, y, 150, 50, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '物性：禁带宽度', 4, 4, 142, 42, 'constituent=1;TitleVertexPC');
        vertexTitle.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsPC1 = mxUtils.makeDraggable(ddItemPC1, dropGraph, functDropPC1, dragElt);

const ddItemPC2 = document.getElementById('ddItemPC2');
const functDropPC2 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'modulePC2', x, y, 150, 50, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '物性：介电常数', 4, 4, 142, 42, 'constituent=1;TitleVertexPC');
        vertexTitle.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsPC2 = mxUtils.makeDraggable(ddItemPC2, dropGraph, functDropPC2, dragElt);

const ddItemPC3 = document.getElementById('ddItemPC3');
const functDropPC3 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'modulePC3', x, y, 150, 50, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '物性：光学吸收谱', 4, 4, 142, 42, 'constituent=1;TitleVertexPC');
        vertexTitle.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsPC3 = mxUtils.makeDraggable(ddItemPC3, dropGraph, functDropPC3, dragElt);

const ddItemPC4 = document.getElementById('ddItemPC4');
const functDropPC4 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'modulePC4', x, y, 150, 50, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '能带结构', 4, 4, 142, 42, 'constituent=1;TitleVertexPC');
        vertexTitle.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsPC4 = mxUtils.makeDraggable(ddItemPC4, dropGraph, functDropPC4, dragElt);

const ddItemPC5 = document.getElementById('ddItemPC5');
const functDropPC5 = function (graph, evt, cell, x, y) {
    var parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
        var vertexBody = graph.insertVertex(parent, null, 'modulePC5', x, y, 150, 50, 'BodyVertex');
        var vertexTitle = graph.insertVertex(vertexBody, null, '分子动力学', 4, 4, 142, 42, 'constituent=1;TitleVertexPC');
        vertexTitle.setConnectable(false);
    }
    finally {
        graph.getModel().endUpdate();
    }
}
const dsPC5 = mxUtils.makeDraggable(ddItemPC5, dropGraph, functDropPC5, dragElt);

$("#fireworksWebUIRefreshButton").on("click", function (e) {
    const url = "http://" + settings.fireworksinfo.address + ":" + settings.fireworksinfo.port
    $('#fireworksWebUI').attr('src', url);
});

$("#workflowsubmit").on("click", function (e) {
    e.preventDefault();

    const encoder = new mxCodec();
    const node = encoder.encode(graph.getModel());
    const xmlStr = mxUtils.getPrettyXml(node);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlStr, "text/xml");

    //mxUtils.popup(xmlStr, true);
    let mxGraphVertexDict = {};
    for (let i = 2; i <= 100; i++) {
        const mxGraphVertexId = i.toString();
        const el = xmlDoc.getElementById(mxGraphVertexId);
        if (el) {
            if (el.getAttribute("value").indexOf("module") > -1) {
                mxGraphVertexDict[mxGraphVertexId] = { "module": el.getAttribute("value"), "params": [], "linkTo": [], "linkFrom": [] };
            } else if (el.getAttribute("style")?.indexOf("Input") > -1) {
                const parent = el.getAttribute("parent");
                const styleArray = el.getAttribute("style").split(";")
                const style = styleArray[styleArray.length - 1];
                mxGraphVertexDict[parent]["params"].push({ "param": style, "value": el.getAttribute("value") });
            } else if (el.getAttribute("edge") == 1) {
                const source = el.getAttribute("source");
                const target = el.getAttribute("target");
                mxGraphVertexDict[source]["linkTo"].push(target);
                mxGraphVertexDict[target]["linkFrom"].push(source);
            }
        }
    }

    console.log(mxGraphVertexDict);
    //vertexJSON = $.parseJSON(mxGraphVertexDict);
    let inputStructureID;
    let targetProperty;
    for (var vertex in mxGraphVertexDict) {
        if (mxGraphVertexDict[vertex]["linkTo"].length == 0 && mxGraphVertexDict[vertex]["linkFrom"].length == 0) {
            $("#workflowSubmitStatus").css("color", "red");
            $("#workflowSubmitStatus").css("font-weight", "bold");
            document.getElementById("workflowSubmitStatus").textContent = "输入错误：图中有孤立模块";
            return 0;
        }
        if (mxGraphVertexDict[vertex]["module"] == "moduleIO1") {
            inputStructureID = mxGraphVertexDict[vertex]["params"][0]["value"];
            console.log(inputStructureID);
        }
        if (mxGraphVertexDict[vertex]["module"] == "modulePC1") {
            targetProperty = "gap";
            console.log(targetProperty);
        }
        if (mxGraphVertexDict[vertex]["module"] == "modulePC2") {
            targetProperty = "dielec";
            console.log(targetProperty);
        }
        if (mxGraphVertexDict[vertex]["module"] == "modulePC3") {
            targetProperty = "absorp";
            console.log(targetProperty);
        }
        if (mxGraphVertexDict[vertex]["module"] == "modulePC4") {
            targetProperty = "band";
            console.log(targetProperty);
        }
        if (mxGraphVertexDict[vertex]["module"] == "modulePC5") {
            targetProperty = "md";
            console.log(targetProperty);
        }
    }
    if (!inputStructureID.trim()) {
        $("#workflowSubmitStatus").css("color", "red");
            $("#workflowSubmitStatus").css("font-weight", "bold");
            document.getElementById("workflowSubmitStatus").textContent = "输入错误：输入结构不能为空";
            return 0;
    }
    if (!targetProperty.trim()) {
        $("#workflowSubmitStatus").css("color", "red");
            $("#workflowSubmitStatus").css("font-weight", "bold");
            document.getElementById("workflowSubmitStatus").textContent = "输入错误：至少需要计算一种性质";
            return 0;
    }

    const query = { _id: inputStructureID.trim(), property: targetProperty.trim() };
    console.log(query);
    $.ajax({
        type: "POST",
        url: "http://localhost:5001/workflow",
        timeout: 30000,
        data: JSON.stringify(query),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {
            $("#loading2").css("display", "flex");
            document.getElementById("workflowSubmitStatus").textContent = "";
        },
        success: function (data) {
            console.log("Success");
            $("#loading2").css("display", "none");
            $("#workflowSubmitStatus").css("color", "#888ea8");
            document.getElementById("workflowSubmitStatus").textContent = "成功提交工作流";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.error("Status: ", XMLHttpRequest.status);
            console.error("readyState: ", XMLHttpRequest.readyState);
            console.error("textStatus: ", textStatus);
            console.error("errorThrown: ", errorThrown);
            $("#loading2").css("display", "none");
            $("#workflowSubmitStatus").css("color", "red");
            document.getElementById("workflowSubmitStatus").textContent = "Error: XMLHttpRequest status " + String(XMLHttpRequest.status);
        },
    })
})