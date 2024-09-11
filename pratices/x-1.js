const constVar = (input)=>{
    let count = 0;
    for( const char of input){
        if(char ==='a' || char ==='e' || char ==='i' || char ==='o' || char ==='u' )
        {
            count++;
        }
       
    }
    console.log(count);
}