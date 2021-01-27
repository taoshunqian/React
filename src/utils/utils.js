const url = require("url")


function setRouter (FooyterDatas) {
	var obj = url.parse(window['location']['href'],true);
	if(typeof FooyterDatas !== 'object') {
		console.log('不是一个对象');
		return false;
	}
	let Arr = new Array();
	let List = FooyterDatas;
	Arr.push(...List.map((list,key) => {
		return list['path']
	}));
	let router = obj.hash.split('#')[1];
	return Arr.indexOf(router) == 0 ? !!+1 : !+1 
}

function setHeaderTitle(title) {
	this.title = title;
}
function getHeaderTitle() {
	var Title = new setHeaderTitle();
	return Title;
}

module.exports = {
	setRouter,
	setHeaderTitle,
	getHeaderTitle
};