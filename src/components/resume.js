import cv from "../assets/pdf/cv.pdf";

const Resume = () => {
    return (
        <section className="w-full h-full flex flex-row space-x-4 p-12">
            <section className="lg:w-[500px] md:w-[400px] h-fit my-auto flex flex-col space-y-8">
                <div className="w-full h-fit my-auto flex flex-col space-y-5">
                    <svg className="w-56 h-64 mx-auto my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path className="fill-white/90" d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"/>
                    </svg> <br></br>
                    <a download href={cv} className="w-full h-10 text-white/90 font-extrabold text-center pt-2 border border-white/30 rounded-md">DOWNLOAD PDF</a>
                </div>
            </section>
            <section className="w-full h-full flex">
                <div className="w-full h-fit flex flex-col space-y-4 p-6 rounded-xl border border-white/30">
                <h1 className="w-full h-10 text-2xl text-white/90 font-bold border-b border-white/30">Resume</h1>
                    <font className="text-white/90">Professional software developer, having great expertise in building software solutions like: APIs, 
                        cross-platform or native mobile or web applications, using cutting edge infrastructures like:
                    </font>
                    <ul className="text-white/90 list-disc px-6">
                        <li>Azure</li>
                        <li>AWS</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>Apache</li>
                        <li>Tomcat</li>
                        <li>GIT</li>
                        <li>Docker</li>
                        <li>Kubernetes and so on – adopting all standardized DevOps practices.</li>
                    </ul>
                    <font className="text-white/90">
                        My level of expertise is of no doubt, as I have and by experience (4 years) worked in agile environments building sophisticated microservice architectures, 
                        monolithic architectures, RESTful architectures, SPAs, and lots more.
                    </font>
                </div>
            </section>
        </section>
    );
}

export default Resume;