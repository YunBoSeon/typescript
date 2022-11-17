interface treeItem {
    title:string,
    contents:string,
    children:Array<treeItem>,
    isSearched?:boolean | undefined
}

var tree:Array<treeItem> = [
    { title : "안녕하세요.", contents : "반갑습니다.", children: [
        {title : "반가워요", contents : "그래요 반갑습니다.", children: [
            {title : "반가워요", contents : "저도 반가워요", children: []}]}]},
    { title : "안녕하세요2.", contents : "반갑습니다2.", children: [] },
    { title : "안녕하세요3.", contents : "반갑습니다3.", children: [] },
    { title : "안녕하세요4.", contents : "반갑습니다4.", children: [] }
];

const treeFiller = (tree:Array<treeItem>): Array<treeItem> => {
    return tree.map(item=>{
        var _item:treeItem =  {...item, isSearched : true};
        if ( _item.children.length > 0 ) {
            _item.children = treeFiller(_item.children);
        }
        return _item;
    });

};

var result = treeFiller(tree);
console.log(result[0]);
