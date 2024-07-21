function CardText({prop, prop2}){
    return(<>   
        <div className="flex flex-row justify-around text-white border-b-2 ">
            <div className=" flex flex-col justify-center">
                <div className="text-2xl font-bold">
                    {prop}
                </div> 
            </div>
            <div className=" w-2/5 break-words">
                {prop2}
            </div>
        </div>
    </>)
}

export default CardText;