let mark = 40;
if(mark >= 80 && mark <= 100){
    console.log ("a+");
} else if(mark >= 70 && mark <=79 ){
    console.log("a")
} else if(mark >= 60 && mark <=69 ){
    console.log("b+")
} else if(mark >= 50 && mark <=59 ){
    console.log("b-")
} else if(mark >= 40 && mark <=49 ){
    console.log("c")
} else if(mark >= 30 && mark <=39 ){
    console.log("failed")
// } else if ( mark>=101 && mark <= 1000 ){
//     console.log("inviled")
}
else if(mark>100){
    console.log("invild")
} else {
    console.log("failed")
}
