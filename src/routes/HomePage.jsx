function HomePage() {
  return (
    <div className="grid">
      <article>
        <hgroup>
          <h2>
            Apply Enter & Exit Page Transition with Framer Motion & React Router
          </h2>
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
      </article>
    </div>
  );
}

export default HomePage;
