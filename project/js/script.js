// Sample drone data
const drones = [
    { id: 'DR-001', name: 'Alpha Drone', status: 'Idle', location: 'California', cargo: 'Food Supplies', image: 'assets/drone-example.jpg' },
    { id: 'DR-002', name: 'Beta Drone', status: 'In Progress', location: 'Tokyo', cargo: 'Medical Supplies', image: 'assets/drone-example.jpg' },
    { id: 'DR-003', name: 'Gamma Drone', status: 'Completed', location: 'New York', cargo: 'Water Bottles', image: 'assets/drone-example.jpg' }
];

// Populate drone list in index.html
const droneListElement = document.getElementById('drone-list');
if (droneListElement) {
    drones.forEach(drone => {
        const card = `
            <div class="drone-card">
                <img src="${drone.image}" alt="${drone.name}">
                <h3>${drone.name}</h3>
                <p>Status: ${drone.status}</p>
                <p>Location: ${drone.location}</p>
                <a href="drone.html?id=${drone.id}" class="btn">View Mission</a>
            </div>
        `;
        droneListElement.innerHTML += card;
    });
}

// Populate mission details in drone.html
const missionDetailsElement = document.getElementById('mission-details');
if (missionDetailsElement) {
    const urlParams = new URLSearchParams(window.location.search);
    const droneId = urlParams.get('id');

    const drone = drones.find(d => d.id === droneId);
    if (drone) {
        missionDetailsElement.innerHTML = `
            <img src="${drone.image}" alt="${drone.name}">
            <h2>${drone.name}</h2>
            <p><strong>Status:</strong> ${drone.status}</p>
            <p><strong>Location:</strong> ${drone.location}</p>
            <p><strong>Cargo:</strong> ${drone.cargo}</p>
        `;
    } else {
        missionDetailsElement.innerHTML = '<p class="error">Drone not found. Please go back and select a valid drone.</p>';
    }
}
