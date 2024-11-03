import TextReveal from "./ui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex flex-col sm:mt-0 -mt-16 min-h-64 items-center justify-center rounded-lg bg-black dark:bg-black">
        {/* <h1 className="text-4xl sm:text-5xl text-transparent bg-clip-text sm:mt-10 mt-4 bg-gradient-to-r from-white to-[#999999]">Our Mission</h1> */}
      <TextReveal text="Eagles isn't just a meme coin
        it's a community on a misssion to soar.
        We bring freedom, fun, and financial potential to all who join!" />
    </div>
  );
}
