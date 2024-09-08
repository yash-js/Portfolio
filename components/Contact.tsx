import { toast } from 'react-toastify';
import SectionTitle from './SectionTitle';

function Contact() {
    const email = "contact@yashpurani.com";
    const toastIdSuccess = "copy-success";
    const toastIdError = "copy-error";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                if (!toast.isActive(toastIdSuccess)) {
                    toast.success('Email address copied to clipboard!', {
                        toastId: toastIdSuccess,
                        position: "bottom-center",
                        autoClose: 1500,
                        style: { backgroundColor: '#0d6f10', color: '#fff' }
                    });
                }
            })
            .catch((err) => {
                if (!toast.isActive(toastIdError)) {
                    toast.error('Failed to copy email address.', {
                        toastId: toastIdError,
                        position: "bottom-center",
                        autoClose: 3000,
                        style: { backgroundColor: '#f44336', color: '#fff' }
                    });
                }
                console.error('Failed to copy email address: ', err);
            });
    };

    return (
        <section
            id="contact"
            className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
        >
            <SectionTitle
                title="What&apos;s next?"
                titleNo='04'
            />
            <h2 className="font-titleFont text-5xl font-semibold">
                Get in touch
            </h2>
            <p className="max-w-[600px] text-center text-textDark">
                I&apos;m currently exploring new opportunities and excited to connect with potential collaborators or employers. If you have an opportunity in mind or just want to reach out for a chat, feel free to drop me a message. I look forward to hearing from you!
            </p>
            <div className="flex flex-col items-center">
                <a href={`mailto:${email}`}>
                    <button className="w-40 h-10 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300">
                        Say Hello!
                    </button>
                </a>
                <button
                    onClick={copyToClipboard}
                    className="w-40 h-10 border border-textGreen mt-4 font-titleFont text-sm text-textGreen tracking-wide rounded-md hover:bg-hoverColor duration-300"
                >
                    Copy Email
                </button>
            </div>
        </section>
    );
}

export default Contact; 