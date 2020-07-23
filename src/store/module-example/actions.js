function addtxthash (context ,msg) {
    context.commit("settxthash",msg)
   // return addtxthash 
}
function increment (context) {
    context.commit('increment')
  }
 function checkmetamask(context,msg) {

 }

export default {
    addtxthash,increment,checkmetamask
} 