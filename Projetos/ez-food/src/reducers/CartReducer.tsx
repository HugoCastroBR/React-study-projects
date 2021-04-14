export default function reducer(state:any, action:any){
    let newState = {...state}
    
    switch(action.type){
        
        case 'Cart-Clean':
            // console.log(newState)
            newState.Cart = []
            return newState

        case 'Cart-Add-Item':
            
            const newItem = action.payload
            const food:any = Object.keys(newItem)[0]
            let Cart:any[] = []
            let toAdd:any[] = [];
            
            newState.Cart.forEach((element:any,index:number) => {
                if(Object.keys(element)[0] === food){
                    toAdd = [true,index,food]
                }
            })
            if(toAdd[0]){
                Cart = [...newState.Cart]
                Cart[toAdd[1]][food] += 0.5 // idk why this is working, but it is
                
            }else{
                Cart = [...newState.Cart,newItem]
            }
            console.log(Cart)
            newState.Cart = [...Cart]
            return newState

        default:
            return newState
    }

}
