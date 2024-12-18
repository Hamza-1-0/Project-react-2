

export const ValidtionObj = ( product :{title:string , description : string , imageUrl : string , price : string})=> {

const errors={
    title :'',
    description:'',
    imageUrl:'',
    price:'',
}

const ValidUrl =/\/{2}.+?\.(jpg|png|gif)/.test(product.imageUrl);

if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
    errors.title = 'Title must be between 10 and 80 characters long.';
}
if(!product.description.trim() || product.description.length < 10 || product.description.length > 900){
    errors.description='Description must be between 10 and 900 characters long.';
}
if(!product.imageUrl.trim() || !ValidUrl){
    errors.imageUrl = 'Invalid URL. Please enter a valid URL.';
}
if (!product.price.trim() || isNaN(Number(product.price))){
    errors.price = 'Price must be a number.';
}

return errors;
}
