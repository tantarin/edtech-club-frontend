import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const ContactForm: React.FC = () => {
    const fieldClassName = `border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full`
    const formik = useFormik({
        initialValues: {
            fullName: '',
            message: '',
            email: '',
        },
        validationSchema: ContactFormSchema,
        onSubmit: async (val, { setStatus }) => {
            setStatus('pending')
            setTimeout(() => {
                setStatus('success')
            }, 1000)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                        Хотите работать с нами?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Заполните эту форму и отправьте нам сообщение
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="fullName"
                        >
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name='fullName'
                            style={{ transition: "all .15s ease" }}
                            type="text"
                            className={fieldClassName}
                            placeholder="Full Name"
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                        />
                    </div>
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name='email'
                            className={fieldClassName}
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>

                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name='message'
                            rows={4} // Вместо "rows="4"" используйте rows={4}
                            cols={80} // Вместо "cols="80"" используйте cols={80}
                            className={fieldClassName}
                            style={{ transition: "all .15s ease" }}
                            placeholder="Type a message..."
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                    </div>
                    <div className="text-center mt-6">
                        <SubmitButton status={formik.status} />
                    </div>
                </div>
            </div>
        </form>
    );
}

function SubmitButton({ status }: { status: any }) {
    const baseBtnClasses = `inline-flex text-white text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1`;
    const primaryBtnClasses = `bg-blue-700 active:bg-blue-900 hover:shadow-lg`
    const pendingBtnClasses = `bg-gray-900 active:bg-gray-900 hover:shadow-lg`
    const successBtnClasses = `bg-green-500 active:bg-green-500 hover:shadow-lg`;

    const btnClasses = `${baseBtnClasses} ${status === "success" ? successBtnClasses : status === "pending" ? pendingBtnClasses : primaryBtnClasses}`

    return (
        <button
            disabled={status === "pending"}
            className={btnClasses}
            type="submit"
            style={{ transition: "all .15s ease" }}
        >
            {status === "success" ?
                <>
                    <svg className="stroke-white fill-white h-5 w-5 mr-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"></path></svg>
                    Сообщение отправлено
                </>
                : status === "pending" ?
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                    :
                    <>Отправить сообщение</>
            }
        </button>
    );
}

export default ContactForm;