const Card = (props) => {
    <div className="w-full h-fit p-3 flex flex-col space-y-2 bg-black">
        Hola
    </div>
}

const Skill = () => {
    return (
        <div className="p-6">
            <div className="bg-white/30 p-3 flex flex-col space-y-4">
                <h1 className="text-black text-3xl font-extrabold border-b-4 border-black pb-2">Skills & Services</h1>
                <section className="w-full h-full p-6 grid grid-cols-3 gap-6">
                    <Card />
                </section>
            </div>
        </div>
    );
}

export default Skill;