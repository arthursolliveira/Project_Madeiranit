var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    register: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            email: faker.internet.email(firstName),
            cpf: cpf.generate(),
            name: `${firstName}`,
            surname: `${lastName}`,
            birthday: '09021997',
            cell: '11987651498',
            pass: 'Teste@123',
            confirm_pass: 'Teste@123'
        }

        return data
    }
}