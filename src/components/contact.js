const Card = (props) => {
    return (
        <div className="w-full h-fit p-6 flex flex-row space-x-0   border rounded-md border-white/30">
            <div className="flex w-[3.8rem] h-14 bg-white/30 rounded-full">{props.icon}</div>
            <div className="w-fit my-auto h-fit flex flex-col space-y-1">
                <h1 className="font-bold text-lg text-white/90 pl-4">{props.title}</h1>
                <font className="text-white/70 text-sm pl-4">{props.content}</font>
            </div>
        </div>
    );
}

const Contact = () => {
    return (
        <div className="w-full h-full p-6">
            <section className="w-full h-full flex flex-col space-y-4">
                <h1 className="text-2xl font-extrabold text-white/90 py-3 pl-6 border-y border-white/30">Let's get in touch</h1>
            </section>
            <section className="w-full p-6 h-full grid grid-cols-2 gap-6">
                <Card icon={
                    <svg className="w-7 mx-auto my-auto h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path className="fill-green-600" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                } title="Address" content="CPSF Lodge, Behind Equity Hostel, Peace Avenue, FUTA South-Gate, Akure, Ondo-State" />
                <Card icon={
                    <svg className="w-7 mx-auto my-auto h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path className="fill-blue-500" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/>
                    </svg>
                } title="Social Profiles" content="CPSF Lodge, Behind Equity Hostel, Peace Avenue, FUTA South-Gate, Akure, Ondo-State" />
            
            </section>
        </div>  
    );
}

export default Contact; 