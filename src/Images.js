function importAll(rc)
{
    let images = {};
    rc.keys().map((item,index) => {images[item.replace('./','')] = rc(item);});
    return images;
}
const Images = importAll(require.context('./images',false,/\.(png|jpe?g|svg)$/));
export default Images
