import cn from 'classnames';

function SubmitButton({ status, className }: { status: any, className?: string }) {
    const baseBtnClasses = `flex text-white text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1`;
    const primaryBtnClasses = `bg-blue-700 active:bg-blue-900 hover:shadow-lg`
    const pendingBtnClasses = `bg-gray-900 active:bg-gray-900 hover:shadow-lg`
    const successBtnClasses = `bg-green-500 active:bg-green-500 hover:shadow-lg`;

    const isPending = status === "pending";
    const isSuccess = status === "success";
    const isPrimaryButton = !isPending && !isSuccess

    return (
        <button
            disabled={status === "pending"}
            className={
                cn(baseBtnClasses,
                    {
                        [primaryBtnClasses]: isPrimaryButton,
                        [pendingBtnClasses]: isPending,
                        [successBtnClasses]: isSuccess,
                    }
                )
            }
            type="submit"
            style={{ transition: "all .15s ease" }}
        >
            {status === "success" ?
                <>
                    <svg className="stroke-white fill-white h-5 w-5 mr-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"></path></svg>
                    Message Sent
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


export default SubmitButton;

