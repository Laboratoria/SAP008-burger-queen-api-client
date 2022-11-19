export const CreateUser = (name, email, password, role) => {
    return fetch('https://lab-api-bq.onrender.com/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role,
            restaurant: 'Burger Queen'

        }
            
        )

})

}