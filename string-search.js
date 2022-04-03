const products =[
    'Dell hardcore i28 300 GB laptop',
    'i phone 1TB camera flashlight phone ',
    'yellow laptop wit black camera ',
    '1x45 Lenove commercial yoga laptop',
    'LG supernova laptop',
    'HTC low parice phone',
    'purple color phone with Laptop' 
]
const searchign = 'laptop';
// indexOf
const output = []; 
for(const product of products){
    if( product.toLocaleLowerCase().indexOf(searchign.toLocaleLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output);