/// <reference types="cypress" />
import Register from '../support/pages/register.js'
import { faker } from '@faker-js/faker';


const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.streetAddress();
const email = faker.internet.email({ firstName, lastName })


const birth = {
  randomBirthdate() {
    const year = faker.datatype.number({ min: 1916, max: 2015 });

    // Gerar um número aleatório entre 1 e 12 (correspondente aos meses do ano)
    const randomMonthIndex = faker.datatype.number({ min: 1, max: 12 });
    // Mapear o número do mês para o nome do mês correspondente
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[randomMonthIndex - 1]; // subtrai 1 do índice para mapear corretamente

    const day = faker.datatype.number({ min: 1, max: 31 });
    return { year, month, day };
  }
}

const { year, month, day } = birth.randomBirthdate();

describe('Forms', () => {

  beforeEach(() => {
    cy.visit('/Register.html')
  })
  it('Basic Flow', () => {

    Register.insertFirstName(firstName)
    Register.insertLastName(lastName)
    Register.insertAddress(address)
    Register.insertEmail(email)
    Register.insertPhone()
    Register.selectGender('FeMale') //Male or FeMale
    Register.insertLanguages()
    Register.insertSkills('Java')
    Register.insertCountry('Brazil')
    Register.insertSelectCountry()
    Register.insertBirth(year, month, day)
    Register.insertPassword('@Ab123456')
    Register.insertSecondPassword('@Ab123456')
    Register.updateImage('image.png')
    Register.clickSubmit()

  })

})