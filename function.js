export async function GetAllUsers(url){
    let response
    let error
    
    await axios.get(url)
    .then(res=> response=res.data)
    .then(err=> error=err)

    return{
        response,
        error
    }
}