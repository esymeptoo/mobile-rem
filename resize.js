// 放在header自执行  根据屏幕大小动态改变html的font-size
(function (doc, win, undefined) {
    function setSize() {
        var dpr, rem, scale;
        var docEl = doc.documentElement;
        var fontEl = doc.createElement('style');
        var metaEl = doc.querySelector('meta[name="viewport"]');

        dpr = win.devicePixelRatio || 1;
        console.log(dpr)
        // rem = docEl.clientWidth * dpr / 10;
        rem = docEl.clientWidth / 10;
        scale = 1 / dpr;

        // metaEl.setAttribute('content', 'width=' + docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
        // docEl.setAttribute('data-dpr', dpr);
        docEl.firstElementChild.appendChild(fontEl);
        fontEl.innerHTML = 'html{font-size: ' + rem + 'px !important;}';

        win.rem2px = function (v) {
            v = parseFloat(v);
            return v * 75
        };
        win.px2rem = function (v) {
            v = parseFloat(v);
            return v / 75;
        };
        win.px2px = function (v) {
            v = parseFloat(v);
            return v * dpr / 2;
        };
        win.dpr = dpr;
        win.rem = rem;
    }
    setSize();
    // 是否要随屏幕改变
    win.addEventListener('resize', setSize, false)
})(document, window);