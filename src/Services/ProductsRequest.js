import firebase from '../Config/firebase'

/*export function getProducts(query){


    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + query)
    .then(response => response.json ())
  //  .then(data => console.log(data))
    .catch(err => console.log(err))
}
export function getProductDetail(id){

  return fetch("https://api.mercadolibre.com/items/"+id)
  .then(response => response.json ())

}*/

export async function getProducts(buscar) {
  const querySnapshot = await firebase.db.collection("products")
  .get()
  return querySnapshot.docs
}
export async function getProductDetail(id){
  //return fetch("https://api.mercadolibre.com/items/"+id)
  //.then(response => response.json ())
  const querySnapshot = await firebase.db.doc("products/"+id).get()
  return querySnapshot
}
export async function update(id,body){
  const querySnapshot = await firebase.db.doc("productos/"+id).set(body)
  return querySnapshot
}
export async function deleteProducto(id){
  const querySnapshot = await firebase.db.doc("productos/"+id).delete()
  return querySnapshot
}
