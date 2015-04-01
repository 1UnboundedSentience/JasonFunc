function runLength(str) {
    var a = [];
    var counter; //str has to have 1 elem?
    var i;
    var j = 0;
    for(i = 0; i<str.length; i = i + counter) {
        counter = 1;
            for ( j = i; str[j] == str[j+1]; j++) {
                counter++;
            }
        a.push(counter);
        a.push(str[i]);
        console.log(counter + " " + str[i]);
    }
    var b = a.join("");
    return b;
}


runLength("aaaabbbccd");


/*
to solve this multi persistence problem, we need a for loop dependent on running 
until two elements stop being equal.  We will transfer the counter to give us the 
number of times appearing.  


*/