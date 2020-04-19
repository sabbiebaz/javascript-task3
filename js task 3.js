let arr =[];

function Bails (wholeNumber)
{
   
for (let i=1; i<=wholeNumber; i++)
{
  if (i%2==0 && i%3==0 && i%5==0){
        let i="yu-gi-oh"; arr.push(i); }

        else if (i%2==0 && i&3==0){
            let i="yu-gi"; arr.push(i);}

             if (i%2==0){
                let i="yu"; arr.push(i);
            }
            else if (i%3==0){
                let i="gi"; arr.push(i);
            }
            else if (i%5==0 ){
                let i="oh"; arr.push(i);}

        else if (i%2!==0 || i%3!==0 || i%5!==0)  {
            arr.push(i);}


}

return arr;
}
Bails (10)
Bails (100)
