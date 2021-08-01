// google POST API url
const ApiUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse'


// post request handler
const submitData = async (data) => {
    var formData = new FormData()

    // provided google form link :: https://docs.google.com/forms/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/viewform
    // filling up the req body form according to the provoded Google Form
    formData.append('entry.923575230', data.name)
    formData.append('entry.959771919', data.address)
    formData.append('entry.1470857061', data.phone)
    formData.append('entry.766642417', data.time)
    formData.append('entry.210369612', data.about)


    // sending request to API asyncronusly and returing the response
    return await fetch(ApiUrl, {
        method: 'POST',
        mode: "no-cors",
        body: formData
    })
        .then(res => res.text())
        .then(response => true)  // success response
        .catch(e => false)  // error response

}








export default submitData