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

const treeFiller = (tree:Array<treeItem>, term:string): Array<treeItem> => {
    return tree.map(item=>{
        let isSearched = false;

        if ( item.title.includes(term) ) {
            isSearched = true;
        }
        const _item:treeItem =  {...item, isSearched : isSearched};
        if ( _item.children.length > 0 ) {
            _item.children = treeFiller(_item.children, term);
        }
        return _item;
    });
};

var result = treeFiller(tree, "안녕");
console.log(result[0]);

const array:Array<any> = [
    {title:"안녕"},
    {title:"반가워"},
    {title:"친하게 지내자"},
];

const arraySearch = (array:Array<any>, term:string) => {
    return array.map(item=>{
        const isSearched = item.title.includes(term);
        return {...item, isSearched : isSearched};
    });
};

var result2 = arraySearch(array, "안녕");
console.log(result2);

