require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';

//获取图片相关的数据
var imageDatas = require('../data/imageData.json');
let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
	for (var i=0; i<imageDatasArr.length;i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">123
      	</section>
      	<nav className="img-figure">234
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
