import { motion } from "framer-motion";
function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="grid"
    >
      <motion.article initial={{ x: -100 }} whileInView={{ x: 0 }}>
        <hgroup>
          <h2>Page Transition with Framer Motion & React Router</h2>
          <h3>It's Pretty Simple!</h3>
        </hgroup>
        <p>You don't need to do a lot!</p>
        <p>it can be done with a with a lil spices of Framer motion.</p>
        <ul>
          <li>Add Framer-Motion Package</li>
          <li>
            Wrap Routes with AnimatePresence to control unmounted components
            animations.
          </li>
          <li>Define Motion Elements for specifying animations.</li>
          <li>And That's It!!</li>
        </ul>
        <blockquote>
          "https://www.npmjs.com/package/framer-motion"
          <footer>
            <cite>- framer-motion </cite>
          </footer>
        </blockquote>
      </motion.article>
    </motion.div>
  );
}

export default HomePage;
