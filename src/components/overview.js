import jilo_dev from "../assets/img/jilo_dev.jpg";

const Overview = () => {
    return (
        <section className="w-full h-full flex flex-row space-x-4 p-6 mt-[60px]">
            {/* left tab */}
            <section className="w-full h-full flex flex-col space-y-4">
                <img src={jilo_dev}></img>
            </section>
            {/* right tab */}
        </section>
    )
}

export default Overview;