import create from '../pages/LoginPage'
import Login from '../factories/Login'
import cart from '../pages/CartFlowPage'

describe('Product purchase flow',()=>{
    //Finalizando uma compra com boleto
    it('Purchase of product with ticket', function(){
       var data = Login.login()
        create.go()
        create.loginUser(data)
        create.loginSucesso()
        cart.payment() 
    })
    //finalizando uma compra com cartao do credito
    it('Buying a product with a credit card', function(){

        var data = Login.login()
        create.go()
        create.loginUser(data)
        create.loginSucesso()
        cart.creditCart()
    })


})