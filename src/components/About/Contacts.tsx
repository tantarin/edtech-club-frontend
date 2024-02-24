import {InstSvg, MailSvg, PhoneSvg} from "../../assets/colorless";

const linkClass = "flex items-center gap-1 text-gray !no-underline"
const spanClass = 'text-lg'
export default function Contacts(){
    return(
        <div className="flex px-4 gap-2 flex-col">
            <a href="/" className={linkClass}>
                <PhoneSvg width={25} height={25} color="text-gray" />
                <span className={spanClass} >+8 914 744 99 27</span>
            </a>
            <a href="/" className={linkClass}>
                <InstSvg width={25} height={25} color="text-gray"/>
                <span className={spanClass}>@edtech</span>
            </a>
            <a href="/" className={linkClass}>
                <MailSvg width={25} height={25} color="text-gray"/>
                <span className={spanClass}>edtech@mail.ru</span>
            </a>
        </div>
    )
}
