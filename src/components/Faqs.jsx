import { useState } from "react";
const Faqs = ()=>{
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: 'What vehicles are legal to import?',
            answer: 'lorem ipsum dummy text'
        },
        {
            question: 'Will the vehicle be delivered directly to me?',
            answer: 'lorem ipsum dummy text'
        },
        {
            question: 'Do you offer financing?',
            answer: 'lorem ipsum dummy text'
        },
        {
            question: 'How can I view the Japanese vehicle auctions?',
            answer: 'lorem ipsum dummy text'
        },
        {
            question: 'If I purchase a vehicle from auction how long will it take to receive it?',
            answer: 'lorem ipsum dummy text'
        },
        {
            question: 'How can I purchase car parts from Japan?',
            answer: 'lorem ipsum dummy text'
        },
        {
            question: 'How can I Place a deposit to bid on vehicles?',
            answer: 'lorem ipsum dummy text'
        }
    ];

    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    }
    return(
        <section className="bg-white">
            <div className="container py-[50px] md:py-[100px]">
            <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] text-[#101828] font-[600] text-center">FAQs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[64px] pt-[50px]">
                    { 
                        faqs.map((faq, index)=>(
                            <div 
                                key={index} 
                                className={`cursor-pointer w-full relative transition duration-300 py-[12px] border-b-[1px] border-[rgba(0, 0, 0, 0.2)] ${
                                    (index == 0 || index == (faqs.length)%2 ) ? 'border-t-[1px]' : '' 
                                }`}
                                onClick={() => toggleFAQ(index)}    
                            >
                                <h4 className="text-normal text-black font-[600] pr-[50px]">{faq.question}</h4>
                                <i className={`absolute top-[2px] text-[28px] right-[10px] transition-transform ${
                                    openIndex === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                }`}></i>
                                
                                <div
                                    className={`transition-all duration-300 easein overflow-hidden ${
                                      openIndex === index ? "opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <p className="mt-2">{faq.answer}</p>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs;