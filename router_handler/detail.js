const db = require('../db/index')

exports.getDetailList = (req,res) =>{
    const sql ='select * from product'
    db.query(sql,(err,results)=>{
        if(err) return res.cc(err)
        

const ordersByOrderId = results.reduce((acc, item) => {
  const orderId = item.product_category
  if (!acc[orderId]) {
    acc[orderId] = {
      class_id: orderId,
      goods: []
    }
  }
  acc[orderId].goods.push({
      product_id:item.product_id,
      product_name:item.product_name,
      price:item.price,
      product_items:item.product_items,
      image_url:item.image_url
  })
  return acc
}, {})


        res.send({
            status:0,
            message:'获取商品列表成功',
            data:Object.values(ordersByOrderId)
        })
    })
} 