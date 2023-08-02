import '../styles/Contact.css'
import Colors from './Colors'

type Theme = {
    primary: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
};

type ColorsProps = {
    changeTheme: (newTheme: Theme) => void;
};

const Contact: React.FC<ColorsProps> = ({ changeTheme }) => {
    return (
        <div className="contact-inner">
            <div className="contact-inner-title">
                <h1>04.<span className="highlight"> What is next? </span></h1>
            </div>

            <div className="contact-inner-box">
                <h1>Get in touch!</h1>
                <Colors changeTheme={changeTheme} />
                <p>I am currently looking for a part-time job beside my work at Originals in <br />
                    Software Engineering! Feel free to send me a message, my inbox is always open.</p>
            </div>


        </div>
    )
}

export default Contact;