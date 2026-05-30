import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

const ExplorerHeader = () => {
  const { copy } = useLanguage();

  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/*       <p className="mb-5 inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-2 font-body text-sm font-semibold text-accent shadow-soft backdrop-blur">
        {copy.explorer.eyebrow}
      </p> */}

      <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {copy.explorer.title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-7 text-muted-foreground sm:text-lg">
        {copy.explorer.subtitle}
      </p>
    </motion.div>
  );
};

export default ExplorerHeader;
