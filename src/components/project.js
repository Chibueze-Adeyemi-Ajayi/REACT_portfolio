// important projects i have worked upon

// display card
const Card = (props) => {
    return (//return widget
        <div className="w-full h-fit space-y-2 flex flex-col p-3 border border-white/20 rounded-lg">
            <h1 className="text-white/90 text-md font-bold text-md">{props.title}</h1>
            <font className="text-sm text-white/70">{props.content}</font>
            <div className="w-full h-fit flex flex-row space-x-4">
                <font className={`${props.color} w-3 h-3 my-auto rounded-full`}></font>
                <font className="text-white/90 my-auto">{props.language}</font>
                <a className="w-fit flex space-x-3" href={props.source_code} target="_blank">
                    <svg className="w-4 h-4 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path className="fill-white/90" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/>
                    </svg>
                    <font className="text-white/90">Source Code</font>
                </a>
                { props.active ? <a className="w-fit flex space-x-3" href={props.link} target="_blank">
                    <svg className="w-4 h-4 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path className="fill-white/90" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"/>
                    </svg>
                    <font className="text-white/90">View App</font>
                </a> : <></> }
            </div>
        </div>
    )
}
// 
const Projects = () => {
    return (
        <scetion id="project" className="w-full h-full p-6 flex md:flex-row flex-col md:space-x-4">
            <section className="lg:w-[500px] md:w-[400px] w-full h-fit my-auto flex flex-col space-y-8">
                <div className="w-full h-fit my-auto flex flex-col space-y-5">
                    <svg className="w-64 h-64 mx-auto my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
                        <path className="fill-white/90" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
                    </svg> 
                    <font className="text-2xl mx-auto text-white/90 font-bold">Top Github Contributor</font>
                    <div className="w-full flex">
                        <section className="w-fit mx-auto flex flex-row space-x-2">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path className="fill-yellow-500" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path className="fill-yellow-500" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path className="fill-yellow-500" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path className="fill-yellow-500" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path className="fill-white/50" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                        </section>
                    </div>
                    <font className="mx-auto text-white/90 text-xl font-extralight">Over 1k Contributions</font>
                    <a target="_blank" href="https://github.com/Chibueze-Adeyemi-Ajayi" className="w-full h-10 text-white/90 font-extrabold text-center pt-2 border border-white/30 rounded-md">View Contributions</a>
                </div>
            </section>
            <section className="w-full md:mt-0 mt-2 flex flex-col h-full border-l border-white/30">
                <h1 className="text-white/90 font-bold px-4 py-2 border-y border-white/30 text-2xl">Live Projects</h1>
                <div className="w-full h-full md:p-6 p-3 grid md:grid-cols-2 gap-6">
                    <Card active={true} link="https://workspace.t21services.co.uk" source_code="https://github.com/Chibueze-Adeyemi-Ajayi/ReactChatSystem" language="JavaScript" color="bg-yellow-300" title="ReactChatSystem" content="This web application serves the purpose of a company's workspace. Entire frontend built on REACT JS and the backend API on Laravel PHP" />
                    <Card active={false} source_code="https://github.com/Crediometer/credio_ajo" language="Dart" color="bg-cyan-300" title="Credio Ajo App" content="Fully fledge contribution (ajo) mobile/desktop app was worked upon with my team during the days of my internship with crediometer. Flutter was the framework used to achieve this." />
                    <Card active={true} link="https://language-processor.netlify.app/" source_code="https://github.com/Chibueze-Adeyemi-Ajayi/LanguageProcessor" language="Dart" color="bg-cyan-300" title="Language Processor" content="A machine learning mobile application, which makes use of Natural Language Processing to understand human language then translate it to any choosen language" />
                    <Card active={true} link="https://up-project.netlify.app/" source_code="https://github.com/Chibueze-Adeyemi-Ajayi/dapp_minting" language="JavaScript" color="bg-yellow-300" title="ERC20 Token Minting" content="A web3 based web applications, which connects to the Ethereum blockchain via Metamask. The main purpose of the app is for minting tokens over the blockchain" />
                    <Card active={false} source_code="https://github.com/Chibueze-Adeyemi-Ajayi/php-ussd" language="Php" color="bg-blue-900" title="USSD Application" content="A simple Unstructured Supplementary Service Data (USSD) application built with PHP. The application has been deployed to the sandwish africastalking testnet" />
                    <Card active={false} source_code="https://github.com/Chibueze-Adeyemi-Ajayi/cam-AI" language="C++" color="bg-pink-500" title="CAM AI" content="A flutter mobile application, which harnesses the power of computer vision to recognises texts, scan barcodes, also detect several pody position during a pose detection mode." />
                </div>
                <a href="https://github.com/Chibueze-Adeyemi-Ajayi" target="_blank" className="h-fit py-1 text-md mt-2 mx-auto px-16 border border-white/30 rounded-full text-center text-white/90">More Projects on Github</a>
            </section>
        </scetion>
    );
}

export default Projects;