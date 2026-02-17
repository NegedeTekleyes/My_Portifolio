import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { service } from "@/data/services";


export default function Services() {
    return (
        <section id="services" className=" px-6 py-24 bg-[#202122]">
            <SectionTitle title= "What I Do?" background="SERVICES" />

            <div className="grid grid-cols-2 gap-x-20 gap-y-14">
                {service.map((service, index) => (
                    <ServiceCard
                    key={index}
                    title={service.title}
                    desc={service.description}
                    Icon={service.icons}
                />
                ))}
            </div>
        </section>
    )
}