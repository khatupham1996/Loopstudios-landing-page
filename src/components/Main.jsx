import interactive from "../images/desktop/image-interactive.jpg";
import earth from "../images/desktop/image-deep-earth.jpg";
import arcade from "../images/desktop/image-night-arcade.jpg";
import soccer from "../images/desktop/image-soccer-team.jpg";
import grid from "../images/desktop/image-grid.jpg";
import above from "../images/desktop/image-from-above.jpg";
import borealis from "../images/desktop/image-pocket-borealis.jpg";
import curiosity from "../images/desktop/image-curiosity.jpg";
import fisheye from "../images/desktop/image-fisheye.jpg";
function Main() {
  const creations = [
    { image: earth, title: "Deep\nEarth" },
    { image: arcade, title: "Night\nArcade" },
    { image: soccer, title: "Soccer\nTeam VR" },
    { image: grid, title: "The\nGrid" },
    { image: above, title: "From Up\nAbove VR" },
    { image: borealis, title: "Pocket\nBorealis" },
    { image: curiosity, title: "The\nCuriosity" },
    { image: fisheye, title: "Make It\nFisheye" },
  ];
  return (
    <>
      <section className="pt-16 md:py-24 lg:py-32">
        <div className="px-8 md:px-16 lg:px-28 ">
          <div className="relative">
            <div className="w-full lg:w-3/5">
              <img
                src={interactive}
                alt="Person using VR headset"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white lg:absolute lg:bottom-0 lg:left-0 lg:w-[55%] lg:ml-[45%] lg:pl-16 lg:pt-16 lg:pb-0 mt-8 lg:mt-0 p-6 lg:p-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 uppercase text-black leading-tight">
                The Leader In
                <br />
                Interactive VR
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="px-8 md:px-16 lg:px-28 ">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 lg:mb-20 gap-6 md:gap-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wide md:text-left">
              Our Creation
            </h2>
            <button className=" hidden lg:block w-40 h-10 border border-black bg-white uppercase">
              See All
            </button>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {creations.map((creation, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden aspect-[21/9] lg:aspect-[3/5]"
              >
                <img
                  src={creation.image}
                  alt={creation.title.replace("\n", " ")}
                  className="w-full h-full object-cover object-top lg:object-center transition-transform duration-300 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h4 className="absolute left-6 md:left-8 bottom-6 md:bottom-8 text-white text-2xl md:text-3xl font-light uppercase leading-tight whitespace-pre-line">
                  {creation.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 lg:hidden">
            <button className="px-10 py-2 border-2 border-black bg-white text-black uppercase tracking-widest text-sm font-light w-40 ">
              See All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
