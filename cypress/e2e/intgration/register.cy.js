
import create from '../pages/RegisterPage'
import registerFactory from '../factories/RegisterFactory'

describe('Create user',()=>{
    //Criar usuário
    it('Perform user registration', function(){

        var data = registerFactory.register()

        create.go()
        create.fillFormPF(data)
        create.finish()
    })

})