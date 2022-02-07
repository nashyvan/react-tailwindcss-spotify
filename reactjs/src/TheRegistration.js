import TheRegistrationInfo from './TheRegistrationInfo'
import TheRegistrationButton from './TheRegistrationButton'

function TheRegistration() {
    return (
        <a className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2"
           href="/">
            <TheRegistrationInfo />
            <TheRegistrationButton />
        </a>
    )
}

export default TheRegistration