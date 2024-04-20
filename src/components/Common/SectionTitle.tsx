const SectionTitle = ({
  title,
  paragraph,
  sub,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  sub: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-xl tracking-[.18em] !leading-relaxed text-black dark:text-white sm:text-xl md:text-[18px]">
          {title}
        </h2>
        <p className="mb-4 text-xl !leading-relaxed text-black  dark:text-white md:text-[33px]">
          {paragraph}
        </p>
        <p className=" text-black dark:text-white md:text-[14px]">
         <em> {sub} </em> 
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
