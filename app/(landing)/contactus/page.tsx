import Navbar from '@/components/homepage/Navbar'
import Footer from '@/components/homepage/Footer'
import ContactUsForm from './ContactUSForm'

export default function ContactUs() {
    return (
        <div className="min-h-screen flex flex-col bg-light-850 dark:bg-dark-100">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-dark-100 dark:text-light-900">Contact Us</h1>
                    <p className="text-xl text-light-500 dark:text-light-700">
                        We're here to help and answer any question you might have.
                    </p>
                </div>
                <ContactUsForm />
            </main>
            <div className="mx-10 justify-center">
                <Footer />
            </div>
        </div>
    )
}