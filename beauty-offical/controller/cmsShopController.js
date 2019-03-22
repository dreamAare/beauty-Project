const cmsShopModel=require('../mode/cmsShopModel');
module.exports={
  addShop(req,res){
    let productName=req.body.productName;
    let englishName=req.body.englishName;
    let price=req.body.price;
    let discount=req.body.discount;
    let pic_path=req.body.pic_path;
    let pro_attribute=req.body.pro_attribute;
    let volume=req.body.volume;
    let product_desc=req.body.product_desc;
    let product_bigTitle=req.body.product_bigTitle;
    let overTime=req.body.overTime;
    let howUse=req.body.howUse;
    let builder=req.body.builder;
    let suitShin=req.body.suitShin;
    let category_id=req.body.category_id;
    let category_child_id=req.body.category_child_id;
    let color=req.body.color;
    let shopPageBigImg=req.body.shopPageBigImg;
    let shopColorImg= req.body.shopColorImg;
    // console.log(productName,englishName,price,discount,pic_path,pro_attribute,volume,product_desc,productName,product_bigTitle,overTime,howUse,builder,suitShin,category_id,category_child_id,color,shopPageBigImg,shopColorImg);
    console.log(shopColorImg[0].imgUrl.uid);
  }
}