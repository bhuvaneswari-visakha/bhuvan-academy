const SectionTitle = ({ tag, title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className="text-[#E67E22] font-semibold uppercase tracking-widest text-sm">
          {tag}
        </span>
      )}
      {title && (
        <h2 className="text-3xl lg:text-4xl font-bold text-[#22333B] mt-2">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 max-w-2xl text-gray-600 leading-7 text-base mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
