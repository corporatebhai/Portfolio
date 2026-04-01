import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto p-4 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-4 right-4 bg-midnight/90 hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <div className="grid max-h-[92vh] md:grid-cols-[1.2fr_1fr]">
          <div className="bg-midnight/40 p-4 md:p-5">
            <img
              src={image}
              alt={title}
              className="h-56 w-full rounded-xl md:h-full md:max-h-[calc(92vh-2.5rem)]"
            />
          </div>
          <div className="overflow-y-auto p-5 pr-16 sm:p-6 sm:pr-18">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-4 text-base font-normal text-neutral-400">{description}</p>
            <div className="space-y-3">
              {subDescription.map((subDesc, index) => (
                <p key={index} className="font-normal leading-7 text-neutral-400">{subDesc}</p>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
              </div>
              <a
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                View Project{" "}
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
