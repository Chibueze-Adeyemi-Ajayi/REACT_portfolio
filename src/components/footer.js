const Footer = () => {
    return (
        <nav className="w-full text-center bg-[#333] border-t border-white/30 z-40 h-[40px] pt-2 text-white/90 border-[#444] px-10">
            Jilo Innovations &copy; {new Date().getFullYear()}
        </nav>
    );
}

export default Footer;