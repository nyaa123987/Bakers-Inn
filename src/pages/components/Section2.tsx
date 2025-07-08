import Image from "next/image";
import Button from "./Buttons";
import H2 from "./Heading2";
import P from "./Paragraph";
import { useState } from "react";
import Modal from "./Modal";
import DonationRequestForm from "./DonationRequestForm";

export default function Section2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <section className="flex justify-center gap-[5%] px-[3%] py-[10vh] mb-[5vh] md:py-[20vh] bg-[#F8F8F8]">
            <div className="flex justify-center">
                <Image src="/images/employees.png" alt="Employees working" width={1500} height={1500} />
            </div>
            <div className="flex flex-col justify-center">
                <H2>Request A Donation</H2>
                <P className="text-[10px] md:text-[20px] pb-[1vh] md:pb-[2vh]">If you are holding an event that you wish to have us donate to, we’re more than glad to help. Fill in the donation request form for us to best understand how we can increase your event’s impact in the local community.</P>
                <div className="pt-[2vh]">
                    <Button onClick={() => setIsModalOpen(true)}>request donation</Button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <DonationRequestForm />
            </Modal>
        </section>
    )
}