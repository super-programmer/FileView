/*文件预览主入口 */
import tpl from 'src/tipl';
class FileView {
    constructor(el, options) {
        this.options = options || {};
        this.el = el || '';                  //绑定元素即预览box
        this.srcollbox = '' ;                //自定义滚动条框
        this.srcollbar = '';                 //自定义滚动条
        this.init();
    }

    /*初始化*/

    init() {
        this.el.append($(tpl))
    }

}
export default FileView;
