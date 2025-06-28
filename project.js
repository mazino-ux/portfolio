
// Portfolio functionality
document.addEventListener("DOMContentLoaded", function() {
    // Load projects from JSON
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            window.projectsData = projects; 
            const portfolioGrid = document.getElementById('portfolio-grid');
            if (!portfolioGrid) {
                console.error('Portfolio grid element not found');
                return;
            }
            portfolioGrid.innerHTML = ''; // Clear existing content
            // Render projects
            projects.forEach(project => {
                const projectCard = createProjectCard(project);
                portfolioGrid.appendChild(projectCard);
            });
            // Initialize Intersection Observer for animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.project-card').forEach(el => {
                observer.observe(el);
            });
            
            // Filter functionality
            setupFilters();
        })
        .catch(error => console.error('Error loading projects:', error));
  });
  
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card hidden';
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 100)}...</p>
                <button class="view-btn" data-id="${project.id}">View Details</button>
            </div>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <div class="tech-list">
                ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
            </div>
            <span class="project-date">${project.date}</span>
            <div class="project-links">
                ${project.website ? 
                    `<a href="${project.website}" target="_blank" class="website-link">View Site</a>` : 
                    `<a class="website-link disabled">No Live Demo</a>`}
                ${project.github ? 
                    `<a href="${project.github}" target="_blank" class="github-link ${project.isPrivate ? 'disabled' : ''}">
                        ${project.isPrivate ? '<i class="fas fa-lock"></i> Private Repo' : '<i class="fab fa-github"></i> Code'}
                    </a>` : 
                    `<a class="github-link disabled"><i class="fas fa-lock"></i> Private</a>`}
            </div>
        </div>
    `;
    
    // Add click event for modal
    card.querySelector('.view-btn').addEventListener('click', () => {
        openProjectModal(project);
    });
    
    return card;
  }
    function setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                const projects = document.querySelectorAll('.project-card');
                
                projects.forEach(project => {
                    const projectData = project.querySelector('.view-btn').dataset;
                    const projectId = parseInt(projectData.id);
                    const projectJson = window.projectsData.find(p => p.id === projectId);
                    
                    if (filter === 'all') {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 
                            projectJson && projectJson.category === filter ? 'block' : 'none';
                    }
                    
                    // Trigger reflow for animation
                    void project.offsetWidth;
                });
            });
        });
    }
    // }
  
  function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="modal-details">
            <h2>${project.title}</h2>
            <span class="modal-date">${project.date}</span>
            <p>${project.description}</p>
            
            <div class="modal-features">
                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-tech">
                <h3>Technologies Used</h3>
                <div class="tech-list">
                    ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-links">
                ${project.website ? 
                    `<a href="${project.website}" target="_blank" class="modal-website">View Live Site</a>` : 
                    `<a class="modal-website disabled">No Live Demo</a>`}
                ${project.github ? 
                    `<a href="${project.github}" target="_blank" class="modal-github ${project.isPrivate ? 'disabled' : ''}">
                        ${project.isPrivate ? '<i class="fas fa-lock"></i> Private Repository' : '<i class="fab fa-github"></i> View Code'}
                    </a>` : 
                    `<a class="modal-github disabled"><i class="fas fa-lock"></i> Private Project</a>`}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Close modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
  }

  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });
  
  
  
  