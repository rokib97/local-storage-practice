/* console.log(1);
setTimeout(() => {
  console.log(2);
}, 3500);
console.log(3);
 */

/* const input = prompt("Please input somethng");
const newInput = parseInt(input) + 200;
alert(newInput); */

const webLocation = confirm("do you want to see location address?");
if (webLocation === true) {
  console.log(location.href);
} else {
  console.log("DGM...");
}
