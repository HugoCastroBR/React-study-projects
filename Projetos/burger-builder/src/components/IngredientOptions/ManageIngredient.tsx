import * as React from 'react';



const ManageIngredient:React.FC = ({ingredient}) =>{
    return(
        <div>
            {ingredient?.name}
        </div>
    )
}

export default ManageIngredient;