function addtxthash (context ,msg) {
    context.commit("settxthash",msg)
   // return addtxthash 
}
function increment (context) {
    context.commit('increment')
  }

export default {
    addtxthash,increment
} 