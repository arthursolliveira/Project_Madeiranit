import create from '../pages/LoginPage'
import Login from '../factories/Login'

describe('Login', ()=>{
    //Login com sucesso
    it('login successfully', function(){
        
        var data = Login.login()
        
        create.go()
        create.loginUser(data)
        create.loginSucesso()
    })
    //email inválido
    it('invalid email', function(){

        var data = Login.login()

        create.go()
        create.incorrectEmail(data)    
    })
    //senha invalida
    it('invalid password', function(){

        var data = Login.login()

        create.go()
        create.passwordIncorrect(data)
    })


})