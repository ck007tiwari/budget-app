export const currencyFormatter = new Intl.NumberFormat(undefined, {
   currency: "INR",
   style: "currency",
   minimumFractionDigits:0  //0 to remove the .00 after amound 
})