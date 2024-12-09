const Card = ({title, desc})=>{
    return(
        <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <img src="../images/global.svg" 
                className="bg-white rounded-[12px] border-[2px] border-[#EAECF0] w-[52px] h-[52px] p-[12px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]"
                aria-hidden={true} 
            />
            <h4 className="text-white text-[20px] leading-[28px] font-[600] py-[16px]">{title}</h4>
            <p className="text-white text-[14px] leading-[21px] font-[400]">{desc}</p>
        </div>
    )
}

export default Card;