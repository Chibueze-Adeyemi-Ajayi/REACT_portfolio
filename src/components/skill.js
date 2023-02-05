const Card = (props) => {
    <div className="w-full h-fit p-3 flex flex-col space-y-2 bg-black">
        Hola
    </div>
}

const Skill = () => {
    return (
        <div className="p-6">
            <div className="bg-inherit border border-white/30 rounded-md p-3 flex flex-col space-y-4">
                <h1 className="text-white/90 text-3xl font-extrabold border-b border-white/30 pb-3">Skills & Services</h1>
                <section className="w-full h-full p-6 grid grid-cols-3 gap-6">
                    <Card />
                </section>
            </div>
        </div>
    );
}

export default Skill;