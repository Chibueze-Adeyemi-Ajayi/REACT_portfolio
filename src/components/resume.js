import cv from "../assets/pdf/cv.pdf";
// online summary of my cv
// it has the o
const Resume = () => {
    return (
        <section id="resume" className="w-full h-full flex flex-col-reverse md:flex-row md:space-x-4 p-6 md:p-12">
            <section className="lg:w-[500px] md:w-[400px] w-full h-fit my-auto flex flex-col space-y-8">
                <div className="w-full mt-2 md:mt-0 h-fit my-auto flex flex-col space-y-5">
                    <svg className="w-56 md:flex hidden h-64 mx-auto my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path className="fill-red-800" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"/>
                    </svg> <br></br>
                    <a download href={cv} className="w-full h-10 text-white/90 font-extrabold text-center pt-2 border border-white/30 rounded-md">DOWNLOAD PDF VERSION</a>
                </div>
            </section>
            <section className="w-full h-full flex">
                <div className="w-full h-fit flex flex-col space-y-4 p-6 rounded-xl border border-white/30">
                <h1 className="w-full h-10 text-2xl text-white/90 font-bold border-b border-white/30">Resume</h1>
                    <font className="text-white/90">Professional software developer, having great expertise in building software solutions like: APIs, 
                        cross-platform or native mobile or web applications, using cutting edge infrastructures like:
                    </font>
                    <ul className="text-white/90 grid grid-cols-2 list-disc px-6">
                        <div>
                            <li>Azure</li>
                            <li>AWS</li>
                            <li>GitHub</li>
                        </div>
                        <div>
                            <li>Heroku</li>
                            <li>Apache</li>
                            <li>Tomcat</li>
                        </div>
                        <div>
                            <li>GIT</li>
                            <li>Docker</li>
                            <li>Kubernetes and so on – adopting all standardized DevOps practices.</li>
                        </div>
                    </ul>
                    <font className="text-white/90">
                        My level of expertise is of no doubt, as I have and by experience (4 years) worked in agile environments building sophisticated microservice architectures, 
                        monolithic architectures, RESTful architectures, SPAs, and lots more.
                    </font>
                    <section className="w-full h-full flex flex-col space-y-4">
                        <h3 className="text-white/90 font-bold text-xl border-y border-white/30 py-3">Professional Experience</h3>
                        <h3 className="text-white/90">T21Services <small>Lead Software Developer (2022 - till date)</small></h3>
                        <ul className="text-white/90 grid md:grid-cols-2 list-disc p-3 gap-6">
                            <div>
                                <li>Delivered high quality codes that passed quality assurance test, user acceptance test, etc.</li>
                                <li>Documented engineering designs for inhouse and client projects.</li>
                                <li>Delivered mobile applications built on server or serverless architecture.</li>
                                <li>Built and extended engineering architectural patterns.</li>  
                            </div>
                            <div>
                                <li>Built professional web interfaces, with high quality backend infrastructures either on microservice or monolithic architectures.</li>
                                <li>Built and extended APIs on industrial RESTful architectural standards.</li>
                                <li>Managed and analyzed company’s database.</li>
                                <li>Supported migration to, and sustainment of, cloud-based platforms</li>
                                <li>Worked with science and development teams to develop and troubleshoot website interfaces</li>
                            </div>
                        </ul>
                    </section>
                    <hr className="border-0 bg-white/30 h-[1px]"></hr>
                    <section className="w-full h-full flex flex-col space-y-4">
                        <h3 className="text-white/90">Crediometer <small>Mobile developer Intern (2022 - 3 months)</small></h3>
                        <ul className="text-white/90 grid md:grid-cols-2 list-disc p-3 gap-6">
                            <div>
                                <li>Delivered high quality codes that passed quality assurance test, user acceptance test, etc.</li>
                                <li>Documented engineering designs for inhouse and client projects.</li>
                                <li>Delivered mobile applications built on server or serverless architecture.</li>
                                <li>Built and extended engineering architectural patterns.</li>  
                            </div>
                            <div>
                                <li>Built professional web interfaces, with high quality backend infrastructures either on microservice or monolithic architectures.</li>
                                <li>Built and extended APIs on industrial RESTful architectural standards.</li>
                                <li>Managed and analyzed company’s database.</li>
                                <li>Supported migration to, and sustainment of, cloud-based platforms</li>
                                <li>Worked with science and development teams to develop and troubleshoot website interfaces</li>
                            </div>
                        </ul>
                    </section>
                </div>
            </section>
        </section>
    );
}

export default Resume;