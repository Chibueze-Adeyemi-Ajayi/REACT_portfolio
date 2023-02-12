// this react component 

const Card = (props) => {
    return  (
        <div className="w-full h-fit p-3 flex flex-col space-y-4 bg-white/90">
            {props.icon}
            <h1 className="text-center font-bold text-xl cursor-pointer">{props.title}</h1>
            <font className="text-center">{props.content}</font>
        </div>
    );
}

const Skill = () => {
    return (
        <div id="skill" className="md:p-6">
            <div className="bg-inherit border border-white/30 rounded-md p-3 flex flex-col space-y-4">
                <h1 className="text-white/90 text-3xl font-extrabold border-b border-white/30 pb-3">Skills & Services</h1>
                <section className="w-full h-full md:p-6 grid md:grid-cols-3 gap-6">
                    <Card icon={
                        <svg className="w-24 mx-auto h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path className="fill-yellow-600" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/>
                        </svg>
                    } title="Frontend Developement" content="By leveraging my expertise on tools like HTML, CSS, Javascript and their respective frameworks, I can build sophisticated Graphic User Interfaces for your web applications"/>
                    <Card icon={
                        <svg className="w-24 mx-auto h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path className="fill-blue-900" d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"/>
                        </svg>
                    } title="Backend Developement" content="Languages like Php, Java, Python, Node.JS and their respective frameworks are tools I use to build backend endpoint for both your web and mobile applications."/>
                    <Card icon={
                        <svg className="w-24 mx-auto h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path className="fill-green-800" d="M305.44954,462.59c7.39157,7.29792,6.18829,20.09661-3.00038,25.00356-77.713,41.80281-176.72559,29.9105-242.34331-35.7082C-5.49624,386.28227-17.404,287.362,24.41381,209.554c4.89125-9.095,17.68975-10.29834,25.00318-3.00043L166.22872,323.36708l27.39411-27.39452c-.68759-2.60974-1.594-5.00071-1.594-7.81361a32.00407,32.00407,0,1,1,32.00407,32.00455c-2.79723,0-5.20378-.89075-7.79786-1.594l-27.40974,27.41015ZM511.9758,303.06732a16.10336,16.10336,0,0,1-16.002,17.00242H463.86031a15.96956,15.96956,0,0,1-15.89265-15.00213C440.46671,175.5492,336.45348,70.53427,207.03078,63.53328a15.84486,15.84486,0,0,1-15.00191-15.90852V16.02652A16.09389,16.09389,0,0,1,209.031.02425C372.25491,8.61922,503.47472,139.841,511.9758,303.06732Zm-96.01221-.29692a16.21093,16.21093,0,0,1-16.11142,17.29934H367.645a16.06862,16.06862,0,0,1-15.89265-14.70522c-6.90712-77.01094-68.118-138.91037-144.92467-145.22376a15.94,15.94,0,0,1-14.79876-15.89289V112.13393a16.134,16.134,0,0,1,17.29908-16.096C319.45132,104.5391,407.55627,192.64538,415.96359,302.7704Z"/>
                        </svg>
                    } title="API Developement" content="GraphQL and Restful APIs are key essentials to enterprise applications. I have built standard API serving microservice applications with commendable fault tolerance"/>
                    <Card icon={
                        <svg className="w-24 mx-auto h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-red-800" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"/>
                        </svg>
                    } title="Database Management" content="Data is the heart of every ground breaking technology, I can build and manage SQL and No-SQL based database system serving both your mobile and web applications"/>
                    <Card icon={
                        <svg className="w-24 mx-auto h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-cyan-600" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                        </svg>
                    } title="Mobile Apps developement" content="Mobile apps for Android and IOS devices are essentials for businesses today, my ability to use Flutter, Java, and Object C have made me built software solutions in this arena"/>
                    <Card icon={
                        <svg className="w-24 mx-auto h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path className="fill-orange-600" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"/>
                        </svg>
                    } title="Desktop App developement" content="Flutter framework has really reduced development cost, and my efficiency with this tool makes me develop power desktop apps for Windows, linux, and MacOS"/>

                </section>
            </div>
        </div>
    );
}

export default Skill;