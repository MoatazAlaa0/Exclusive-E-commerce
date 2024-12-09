import React from "react";
import imgQrCode from "../../assets/images/QrCode.png"
import imgAppStore from "../../assets/images/AppStore.png"
import imgGooglePlay from "../../assets/images/GooglePlay.png"
const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-5">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Exclusive Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Exclusive</h3>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <form className="flex items-center border border-gray-300 rounded-l-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded-l-md text-white bg-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="p-2 rounded-r-md"
                        >
                            ➤
                        </button>
                    </form>
                </div>

                {/* Support Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Support</h3>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <a
                        href="mailto:exclusive@gmail.com"
                        className="block hover:underline"
                    >
                        exclusive@gmail.com
                    </a>
                    <a href="tel:+8801588889999" className="block hover:underline">
                        +88015-88888-9999
                    </a>
                </div>

                {/* Account Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Account</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">My Account</a></li>
                        <li><a href="#" className="hover:underline">Login / Register</a></li>
                        <li><a href="#" className="hover:underline">Cart</a></li>
                        <li><a href="#" className="hover:underline">Wishlist</a></li>
                        <li><a href="#" className="hover:underline">Shop</a></li>
                    </ul>
                </div>

                {/* Quick Link Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Quick Link</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms Of Use</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Download App Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Download App</h3>
                    <p>Save $5 with App. New User Only</p>
                    <div className="flex space-x-4">
                        <img 
                            src={imgQrCode}
                            alt="QrCode"
                            className="hover:opacity-80 w-20 " 
                        />
                        <div className="flex flex-col">

                        <img
                            src={imgGooglePlay}
                            alt="Google Play"
                            className="hover:opacity-80  w-28"
                        />
                        <img
                            src={imgAppStore}
                            alt="App Store"
                            className="hover:opacity-80 w-28"
                        />
                        </div>
                    </div>
                    <div className="flex space-x-8 items-center mt-4">
                        <a href="https://www.facebook.com" target="_blank" className="hover:opacity-80">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com" target="_blank" className="hover:opacity-80">
                        <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="hover:opacity-80">
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="hover:opacity-80">
                        <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © Copyright Rimel 2022. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
