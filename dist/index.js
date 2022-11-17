"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tree = [
    { title: "안녕하세요.", contents: "반갑습니다.", children: [
            { title: "반가워요", contents: "그래요 반갑습니다.", children: [
                    { title: "반가워요", contents: "저도 반가워요", children: [] }
                ] }
        ] },
    { title: "안녕하세요2.", contents: "반갑습니다2.", children: [] },
    { title: "안녕하세요3.", contents: "반갑습니다3.", children: [] },
    { title: "안녕하세요4.", contents: "반갑습니다4.", children: [] }
];
var treeFiller = function (tree, term) {
    return tree.map(function (item) {
        var isSearched = false;
        if (item.title.includes(term)) {
            isSearched = true;
        }
        var _item = __assign(__assign({}, item), { isSearched: isSearched });
        if (_item.children.length > 0) {
            _item.children = treeFiller(_item.children, term);
        }
        return _item;
    });
};
var result = treeFiller(tree, "안녕");
console.log(result[0]);
var array = [
    { title: "안녕" },
    { title: "반가워" },
    { title: "친하게 지내자" },
];
var arraySearch = function (array, term) {
    return array.map(function (item) {
        var isSearched = item.title.includes(term);
        return __assign(__assign({}, item), { isSearched: isSearched });
    });
};
var result2 = arraySearch(array, "안녕");
console.log(result2);
