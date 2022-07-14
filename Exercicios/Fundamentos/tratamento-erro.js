function treatError(error){
    throw new Error('Error function toUp');
}
function toUp(obj){
    try{
        console.log(obj.name.toUpperCase());

    }catch(e){
        treatError(e);
    } finally{
        console.log('final');
    }
}
const obj = {naem :'Roberto'};
toUp(obj);