import React, { useState } from 'react';
import styled from 'styled-components'

const ItemSelectorStyle = styled.div`

    border-bottom: 1px solid gray;
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    overflow-x: hidden;
    & div{
        
        & button{
        height: 30px;
        border: 1px solid #9f343d;
        width: 100px;
        background-color: transparent;
        border-radius: 50px;
        color: #9f343d;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;
        }

        & button:hover{
            transition: 0.4s;
            background-color: #9f343d;
            color: white;
        }
    }


`

const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 130px;
    & input{
        width: 30px;
        height: 25px;
        border-radius: 5px;
        border: 1px solid #9a9a9a;
        text-align: center;
        color: #4a4a4a;
        font-weight: 700;    
    }
    & span{
        font-weight: 700;
        font-size: 20px;
    }
`


const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-around;
    align-items: flex-end;
`

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-around;
    align-items: flex-start;
    
    & h4{
        margin: 0px;
        font-size: 26px;
    }

    & :last-child{
        font-size: 22px;
        color: #9f343d;
    }
    & :last-child::before{
        content: "R$: "
    }
`



interface IProps{
    name: string,
    price: number
    description?: string
    addItemCart: (element:string,event:any,amount?:number) => void
}

const ItemSelector:React.FC<IProps> = ({name,price,description="The best",addItemCart}) => {
    const [amount, setAmount] = useState(1)



    return(
        <ItemSelectorStyle>
            <AboutContainer>
                <h4>{name}</h4>
                <span>{description}</span>
                <span>{price.toFixed(2)}</span>
            </AboutContainer>
            <ColumnDiv>
                
                <AmountContainer>
                    <span>Amount:</span>
                    <input type="text" defaultValue={amount} onChange={
                        (event) => {
                            if(isNaN(parseInt(event.target.value))){
                                setAmount(0)
                            }else{
                                setAmount(parseInt(event.target.value))
                            }
                            
                            
                        }
                    }/>
                </AmountContainer>
                
                <button
                onClick={
                    (event) => {addItemCart(name,event,amount)} 
                }
                >+ Add</button>
            </ColumnDiv>
        </ItemSelectorStyle>
    )
}

export default ItemSelector;