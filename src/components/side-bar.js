// this is the sidebar for mobile devices

import $ from "jquery"
import { setPos } from "../assets/js/nav";

// Sidebar widget
const SideBar = () => {
    return (
        // application sidebar
        <section id="side_bar" className="w-[300px] overflow-y-auto p-6 md:hidden fixed top-0 left-[-300px] h-[100%] bg-[#444]">
            <section className="lg:w-[500px] md:w-[400px] w-full h-fit my-auto flex flex-col space-y-8">
                <div className="w-full h-fit my-auto flex flex-col space-y-5">
                    <svg className="w-64 h-64 mx-auto my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
                        <path className="fill-white/90" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
                    </svg> 
                    {/* Github contribution */}
                    <font className="text-xl mx-auto text-white/90">Top Github Contributor</font>
                    <div className="w-full flex">
                        {/*  */}
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
                    <hr></hr>
                    <div className="w-full space-y-6 flex-col">
                <div className="w-fit h-fit my-auto flex-col space-y-10">
                    <span onClick={
                        () => {
                            // animate side out
                            $("#side_bar").animate({left: "-300px"});
                            setPos(-300);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#overview").offset().top
                            }, 500);
                        }
                    } className="w-fit cursor-pointer h-fit my-auto flex space-x-2">
                        <svg className="w-3 h-3 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-white/90" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                        </svg>
                        <font className="text-white/90 text-sm">Overview</font>
                    </span>
                    <span onClick={
                        // close side bar
                        () => {
                            $("#side_bar").animate({left: "-300px"});
                            setPos(-300);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#resume").offset().top
                            }, 500);
                        }
                    } className="w-fit cursor-pointer h-fit my-auto flex space-x-2">
                        <svg className="w-3 h-3 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-white/90" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"/>
                        </svg>
                        <font className="text-white/90 text-sm">Resume</font>
                    </span>
                    <span onClick={
                        () => {
                            $("#side_bar").animate({left: "-300px"});
                            setPos(-300);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#skill").offset().top
                            }, 500);
                        }
                    } className="w-fit cursor-pointer h-fit my-auto flex space-x-2">
                        <svg className="w-4 h-4 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path className="fill-white/90" d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"/>
                        </svg>
                        <font className="text-white/90 text-sm">Skills & Services</font>
                    </span>
                    <span onClick={
                        () => {
                            $("#side_bar").animate({left: "-300px"});
                            setPos(-300);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#project").offset().top
                            }, 500);
                        }
                    } className="w-fit cursor-pointer h-fit my-auto flex space-x-2">
                        <svg className="w-4 h-4 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path className="fill-white/90" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/>
                        </svg>
                        <font className="text-white/90 text-sm">Projects</font>
                    </span>
                    <span onClick={
                        () => {
                            $("#side_bar").animate({left: "-300px"});
                            setPos(-300);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: $("#contact").offset().top
                            }, 500);
                        }
                    } className="w-fit cursor-pointer h-fit my-auto flex space-x-2">
                        <svg className="w-3 h-3 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path className="fill-white/90" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                        </svg>
                        <font className="text-white/90 text-sm">Contact</font>
                    </span>
                </div>
                </div>
                </div>
            </section>
        </section>
    )
}

export default SideBar;