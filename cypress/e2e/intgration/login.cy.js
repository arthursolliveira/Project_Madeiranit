import create from '../pages/LoginPage'
import Login from '../factories/Login'

describe('Login', ()=>{
    it('login successfully', function(){
        
        var data = Login.login()
        
        create.go()
        create.loginUser(data)
        create.loginSucesso()
    })

    it('invalid email', function(){

        var data = Login.login()

        create.go()
        create.incorrectEmail(data)    
    })

    it('invalid password', function(){

        var data = Login.login()

        create.go()
        create.passwordIncorrect(data)
    })


})