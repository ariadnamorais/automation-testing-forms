class Register {

    insertFirstName(firstName) {
        cy.get('.form-control[placeholder="First Name"]')
            .type(firstName);
    }

    insertLastName(lastName) {
        cy.get('.form-control[placeholder="Last Name"]')
            .type(lastName);
    }

    insertAddress(address) {
        cy.get('textarea.form-control[ng-model="Adress"]')
            .type(address);
    }

    insertEmail(email) {
        cy.get('input[type="email"].form-control[ng-model="EmailAdress"]')
            .type(email);
    }


    insertPhone() {
        function generatePhoneNumber() {
            let phoneNumber = '';
            for (let i = 0; i < 10; i++) {
                phoneNumber += Math.floor(Math.random() * 10);
            }
            return phoneNumber;
        }

        const phone = generatePhoneNumber();

        cy.get('input[type="tel"].form-control[ng-model="Phone"]')
            .type(phone);
    }

    selectGender(gender) {
        cy.get(`input[value=${gender}]`).click();
        //cy.get(`:nth-child(5) > .col-md-4 > :nth-child(${gender})`)
    }

    insertLanguages() {
        cy.get('#msdd').click()
        cy.get('ul.ui-autocomplete').find('li:nth-child(3)').click()
        cy.get('#section').click()
    }

    insertSkills(skill) {
        cy.get('select#Skills')
            .select(skill)
    }

    insertCountry(country) {
        cy.get('select#countries').then($select => {
            if (!$select.find('option[value="Brazil"]').length) {
                $select.append('<option value="Brazil">Brazil</option>')
            }
        });

        cy.get('select#countries').select(country)

    }

    insertSelectCountry() {
        cy.get('.select2-selection').click()
        // Encontre e clique no segundo valor disponível na lista
        cy.get('.select2-results__option').eq(1).click();
    }


    insertBirth(year, month, day) {
        cy.get('#yearbox').select(year.toString());
        cy.get('[ng-model="monthbox"]').select(month);
        cy.get('#daybox').select(day.toString());
    }

    insertPassword(password) {
        cy.get('#firstpassword')
            .type(password)
    }

    insertSecondPassword(secondPassword) {
        cy.get('#secondpassword')
            .type(secondPassword)
    }

    clickSubmit() {
        cy.get('#submitbtn').click()
    }

    // updateImage(image) {
    //     cy.fixture(image).then((imagem) => {
    //         cy.get('#imagesrc')
    //             .invoke('attr', 'src', imagem);
    //     });
    // }

    updateImage(image) {
        cy.fixture(image).then(fileContent => {
            cy.get("input[type=file]").then($input => {
                const blob = Cypress.Blob.base64StringToBlob(fileContent);
                const testFile = new File([blob], image);
                const dataTransfer = new DataTransfer();

                dataTransfer.items.add(testFile);
                $input[0].files = dataTransfer.files;

            });
            
        });

    }


}

export default new Register()