import { motion } from "framer-motion";
function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid"
      style={{ marginTop: "3 rem" }}
    >
      <section>
        <hgroup>
          <h2>My Name is Ahmed</h2>
          <h3>Fullstack Javascript Devloper</h3>
        </hgroup>
        <p>
          I share tips and tricks on how to break JavaScript Industry Standards.
        </p>
        <blockquote>
          If you are exsited to join the community and learn new things, I am
          happy to have you on Twitter.
          <footer>
            <cite>
              -{" "}
              <a href="https://twitter.com/ahmedrowaihi">
                twitter: @ahmedrowaihi
              </a>
            </cite>
          </footer>
        </blockquote>
      </section>
    </motion.div>
  );
}

export default AboutPage;
