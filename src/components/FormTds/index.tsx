import { PackageCard } from '@/src/components/PackageCard'
import ServiceInfo from "@/src/components/FormTds/ServiceInfo"
import ContactCard from "@/src/components/FormTds/ContactCard"

export const FormTds = () => {
  return (
    <div className="form16__wrapper mt-[6rem]">
      <PackageCard />
      <div className='flex w-full justify-center'>
        <ServiceInfo />
        <div className='w-3/10 relative'>
          <ContactCard />
        </div>
      </div>
    </div>
  )
}