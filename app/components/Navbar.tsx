'use client';
import Link from 'next/link';
import '../globals.css'; // Ensure this is imported if not already

const links = [
    { href: "/", label: "Home" },
    { href: "/aboutme", label: "About Me" },
    { href: "/achievements", label: "My Achievements" },
    { href: "/contactme", label: "Contact Me" },
    { href: "/projects", label: "My Projects" }
];

const Navbar = () => {
    return (
        <nav className="navbar">
            {links.map((link, index) => (
                <Link key={index} href={link.href} className="navbar-link">
                    {link.label}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
