import { useEffect, useState } from "react";

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!document.cookie.includes("cookieConsent")) {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        document.cookie = "cookieConsent=accepted; path=/;";
        setVisible(false);
    };

    const reject = () => {
        document.cookie = "cookieConsent=rejected; path=/;";
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-white p-4 shadow-lg rounded">
            <p>
                We use cookies. <a href="/cookies">Read policy</a>
            </p>
            <button onClick={accept}>Accept</button>
            <button onClick={reject}>Reject</button>
        </div>
    );
};

export default CookieBanner;