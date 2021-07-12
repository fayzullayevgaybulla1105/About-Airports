try {
    async function getData(icvalue, iavalue) {
        let response = await fetch(`https://airport-info.p.rapidapi.com/airport?icao=${icvalue}&iata=${iavalue}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f7514e5f85msha0614e29b2c02d1p16d98djsn7f4bffa38c9b",
                "x-rapidapi-host": "airport-info.p.rapidapi.com"
            }
        })

        let realCode = await response.json();
        let rC = realCode
        console.log(rC);

        if (rC.city) {
            city.textContent = 'City: ' + rC.city
            country.textContent = 'Country: ' + rC.country
            names.textContent = 'Airport name: ' + rC.name
            locations.textContent = 'Location: ' + rC.location
            states.textContent = 'State: ' + rC.state
            phone.textContent = 'Phone number: ' + rC.phone
            website.textContent = "Website: " + rC.website
            
        }else{
            city.textContent = rC.error.text
        }
    }
    getData()

    btnOk.onclick = () => {

        if ((input1.value != '' && input2.value != '')) {
            getData(input1.value, input2.value)
        }

        if (input1.value != '' && input2.value === '') throw new Error(alert('Please iata code'))
        if (input1.value === '' && input2.value != '') throw new Error(alert('Please icao code'))

    }
} catch (error) {
    // alert(error.message)
    alert(errorMessage.textContent) = error.message
    alert(errorMessage.style.color) = 'red'
}
