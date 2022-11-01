const l1 = [1,2,4];
const l2 = [1,3,4];

var mergeTwoLists = function(list1, list2) {
    const mergeLists = list1.concat(list2);
    return mergeLists.sort();
};

var mergeTwoLists = function(list1, list2) {
    const mergeLists = [];
    const bound = list1.length < list2.length ? list2.length : list1.length;
    
     for (let i = 0; i < bound; i++) {
             if(bound === list1.length && list2.length){
                 if(list1[i] <= list2[i]){
                 mergeLists.push(list1[i]);
                 mergeLists.push(list2[i]);
                 }else{
                 mergeLists.push(list2[i]);
                 mergeLists.push(list1[i]);
                 }
             }else{
                list1.length < list2.length ? mergeLists.push(list2[i]): mergeLists.push(list1[i]);
             }
         }
    return mergeLists;
};

mergeTwoLists(l1,l2);