import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>My Portfolio</h1>
                <nav style={styles.nav}>
                    <a href="#about" style={styles.navLink}>About</a>
                    <a href="#projects" style={styles.navLink}>Projects</a>
                    <a href="#contact" style={styles.navLink}>Contact</a>
                </nav>
            </header>

            <section id="about" style={styles.section}>
                <div style={styles.container}>
                    <h2>About Me</h2>
                    <p>Hello! I'm [Your Name], a passionate [Your Profession] with expertise in [Your Skills]. I love creating innovative solutions and bringing ideas to life.</p>
                </div>
            </section>

            <section id="projects" style={styles.section}>
                <div style={styles.container}>
                    <h2>Projects</h2>
                    <div>
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Project 1" style={styles.projectImage} />
                    </div>
                    <div>
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                        <img src="https://via.placeholder.com/600x400" alt="Project 2" style={styles.projectImage} />
                    </div>
                </div>
            </section>

            <section id="contact" style={styles.section}>
                <div style={styles.container}>
                    <h2>Contact Me</h2>
                    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                    <p>Phone: [Your Phone Number]</p>
                </div>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2025 [Your Name]. All Rights Reserved.</p>
            </footer>
        </div>
    );
};


export default Portfolio;
