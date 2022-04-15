import { motion } from "framer-motion";
function Page404() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      style={{ marginTop: "3rem" }}
    >
      <hgroup>
        <h2>404 !</h2>
        <h3>Bruh you are trying to get a page that doesn't exist!</h3>
      </hgroup>
    </motion.div>
  );
}

export default Page404;
