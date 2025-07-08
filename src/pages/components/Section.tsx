import Image from "next/image";
import Button from "./Buttons";
import H2 from "./Heading2";
import P from "./Paragraph";
import { useState } from "react";
import Modal from "./Modal";
import FactoryTourForm from "./FactoryTourForm";

export default function Section() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <section className="bg-white flex justify-center gap-[5%] px-[3%] py-[10vh] md:py-[20vh]">
            <div className="flex flex-col justify-center">
                <H2>Book A Factory Tour</H2>
                <P className="text-[10px] md:text-[20px] pb-[1vh] md:pb-[2vh]">Keen on seeing how Baker’s inn products are made? Are you interested in a field trip day for your school’s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you.</P>
                <div className="pt-[2vh]">
                    <Button onClick={() => setIsModalOpen(true)}>book factory tour</Button>
                </div>
            </div>
            <div className="flex justify-center">
                <Image src="/images/oven-bread.png" alt="Loaves of bread" width={1500} height={1500} />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <FactoryTourForm />
            </Modal>
        </section>
    );
}