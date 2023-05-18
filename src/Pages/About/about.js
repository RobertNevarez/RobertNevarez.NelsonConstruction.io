import styles from "./about.module.css";

function About() {
  return (
    <div className="pageContainer">
      <h2 className={styles.margin}>Hi, I'm Ying</h2>
      <p>
        I'm a UI/UX Designer with some skills in front-end development and
        illustration. I like to pick up additional skills along the way along
        with learning about the latest technology and trends involved in UI/UX.
        I do a lot of freelance work and my key skills involves doing user
        experince along with designing interesting UI while keeping the
        front-end development in mind to promote communication between designer
        and developer. While not doing work as a designer I hang out with my
        friends and spend time on my hobbies to balance out my work life balance
        to prevent burn out.{" "}
      </p>
      <br></br>
      <h3 className={styles.margin}>Contacts</h3>
      <p>Phone Number: 201-786-8863</p>
      <p>E-mail: yinglin150@gmail.com</p>
      <br></br>
      <a href="https://www.linkedin.com/in/ying-lin-9a79501a5/" target="_blank"><div className={styles.linkedin}><i class="fa-brands fa-linkedin fa-3x"></i><p>LinkedIn</p></div></a>
    </div>
  );
}

export default About;
