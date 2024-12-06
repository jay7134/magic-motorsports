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
            <div className="container py-[100px]">
                <h2 className="text-center text-2xl font-[600] pb-12">FAQs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 divide-y">
                    {
                        faqs.map((faq, index)=>(
                            <div 
                                key={index} 
                                className="cursor-pointer"
                                onClick={() => toggleFAQ(index)}    
                            >
                                <h4>{faq.question}
                                
                                    <i className={`${
                                        openIndex === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                                    }`}></i>
                                
                                </h4>
                                {
                                    openIndex === index && (
                                        <p className="animate__animated animate__fadeInDown">{faq.answer}</p>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs;