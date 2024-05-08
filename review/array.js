console.log('array test');
const months = ['March', 'Jan', 'Febddddddd', 'Decgggggg'];
months.sort();
console.log(months);
months.sort((a,b) => a.length - b.length);
