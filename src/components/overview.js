import jilo_dev from "../assets/img/jilo_dev.jpg";

const Overview = () => {
    return (
        <section className="w-full h-full flex flex-row space-x-4 p-12 mt-[60px]">
            {/* left tab */}
            <section className="lg:w-[400px] md:w-[300px] h-full flex flex-col space-y-4">
                <img className="w-56 h-56 mx-auto rounded-full" src={jilo_dev}></img>
                <font className="text-2xl mx-auto text-white/90 font-bold">Jilo Developer</font>
                <font className="mx-auto text-white/90 text-xl">Ajayi Chibueze Adeyemi</font>
                <div className="w-full h-fit mx-auto grid grid-cols-4 gap-3">
                    <div className="w-10 h-10 flex rounded-full bg-white/30">

                    </div>
                </div>
            </section>
            {/* right tab */}
        </section>
    )
}

export default Overview;