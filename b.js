function b()
{
     const Total=parseFloat(document.querySelector('#total').value)
     const Rate=parseFloat(document.querySelector('#rate').value)
     console.log(Rate);
     const Tip=Total*(Rate/100)
     const Tax=Total*(5.5/100)
     const Grandtotal=Total+Tip+Tax;
     document.querySelector('#tip').innerHTML=`$${Tip.toFixed(2)}`
     document.querySelector('#tax').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#grand-total').innerHTML=`$${GrandTotal.toFixed(2)}`
}
     document.querySelector('#btn').addEventListener('click',b)