(function() {
    function removeHTMLTag(str) {
        str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g, ''); //去除行尾空白
        str = str.replace(/ /ig, ''); //去掉 
        return str;
    }
})();