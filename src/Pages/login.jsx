import '../Styles/login.css'
import { AiFillMessage, AiFillLock } from "react-icons/ai";
import { CgSpinner } from 'react-icons/cg';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import OTPInput from "otp-input-react";
import 'react-phone-input-2/lib/style.css';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Link } from 'react-router-dom';

const Login = () => {

    const [phone, setphone] = useState("");
    const [otp, setOTP] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const [load, setLoad] = useState(false);

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignup();
                },
                'expired-callback': () => { }
            }, auth);
        }
    }

    function onSignup() {
        setLoad(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + phone;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoad(false);
                setShowOTP(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoad(false);
                toast.error("Cannot Send OTP!");
            });
    }

    function onOTPVerify() {
        setLoad(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setLoad(false);
                toast.success("OTP Verified!");
                window.location.href = "/home";
            })
            .catch((err) => {
                console.log(err);
                setLoad(false);
                toast.error("Cannot Verify OTP!");
            });
    }

    function editNo() {
        setShowOTP(false);
    }

    return (
        <>
            <div className="login-wrapper">
                <Toaster duration={{ duration: 4000 }} />
                <div id='recaptcha-container'></div>
                <section className="form-wrapper">

                    {
                        showOTP ? (
                            <>
                                <h1>Verify your OTP!</h1>
                                <AiFillLock size={50} className="icon" />

                                <OTPInput
                                    className="otp-input"
                                    OTPLength="6"
                                    country={'in'}
                                    value={otp}
                                    onChange={setOTP} />
                                <button onClick={onOTPVerify} className='button'>{load && <CgSpinner className='spinner' size={22} />} Verify OTP!</button>
                                <p className='edit-no'>Incorrect Number? <Link onClick={editNo}>Edit Number</Link></p>
                            </>
                        )
                            : (
                                <>
                                    < h1 > Login using OTP!</h1>
                                    <AiFillMessage size={50} className="icon" />

                                    <PhoneInput
                                        country={'in'}
                                        value={phone}
                                        onChange={setphone} />
                                    <button onClick={onSignup} className='button'> {load && <CgSpinner className='spinner' size={22} />} Send OTP!</button>
                                </>
                            )
                    }

                </section>
            </div >
        </>
    );
}

export default Login;