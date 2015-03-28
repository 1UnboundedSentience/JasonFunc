function mySplicer(array, index, size) {
    array2 = [];
    
    for (i = 0; i<=index; i++) {
        array2.push(array[i]);
    }
    for (i = index+size ; i<array.length; i++) {
        array2.push(array[i]);
    }
    //console.log(i+size);
    //console.log(array[2]);
    
    return array2;
}

mySplicer([1,2,2,3,3,3,4], 2, 3);