import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Inline styles for consistency and spacing
const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#222',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '280px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.5',
  },
};

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  // Fetch all projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Our Projects</h2>

      {/*  Wrapper to restrict width like other sections */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project._id} style={styles.card}>
              <img
                src={project.image}
                alt={project.name}
                style={styles.image}
              />
              <h3 style={styles.name}>{project.name}</h3>
              <p style={styles.description}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
