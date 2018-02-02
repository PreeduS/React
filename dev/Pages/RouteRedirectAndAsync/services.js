
export const deleteTodo = (id) =>{
    return new Promise( (resolve,reject) => {
        setTimeout( () =>{
            //Math.floor(Math.random()*10)<7 ? resolve(id) : reject('DELETE_TOTO_ERR')
            resolve(id)
            /*try{  throw new Error('Test error')
            }catch(e){
                console.log('err catched,e = ',e)
                throw new Error('e, ',e)
            }*/
        },2000 )

    })

}