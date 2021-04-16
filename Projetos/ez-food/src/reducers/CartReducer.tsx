
export default function reducer(state:any, action:any){

    let newState = {...state}
    
    switch(action.type){
        
        case 'Cart-Clean':
            
            newState.Cart = []
            return newState
        case 'Cart-Add-Item':
            
            const newItem:Object = action.payload
            const food:any = Object.keys(newItem)[0]
            let Cart:any[] = []
            let toAdd:any[] = [];
            const amount:any = Object.values(newItem)[0]
            let indexRemover:number[] = []
            newState.Cart.forEach((element:any,index:number) => {
                if(Object.keys(element)[0] === food){
                    toAdd = [true,index,food]
                }
            })
            if(toAdd[0]){
                Cart = [...newState.Cart];
                Cart[toAdd[1]][food] += amount/2// idk why this is working, but it is
                if(Cart[toAdd[1]][food] <= 0){
                    
                    Cart.forEach((element:any,index:number) => {
                        console.log(Object.keys(element)[0],food)
                        if(Object.keys(element)[0] === food){
                            console.log("removendo")
                            indexRemover.push(index)
                        }
                        
                    })
                }
            }else{
                if(Object.values(newItem)[0] > 0){
                    Cart = [...newState.Cart,newItem]
                }
                
            }
            
            
            indexRemover.forEach((element:number) => {
                Cart.splice(element,1)
            })
            
            newState.Cart = [...Cart]
            return newState
        case 'Toggle-Cart-Modal':
            newState.CartModal = !newState.CartModal
            return newState
        default:
            return newState
    }

}
