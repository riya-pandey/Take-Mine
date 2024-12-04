

//Samples
const sampleResources = [
    {
      id: '1',
      name: 'Calculus Textbook',
      location: 'Main Library',
      description: 'Introductory calculus textbook, 5th edition',
      cost: '$50',
      availability: true,
      reviews: [
        { id: '1', user: 'John Doe', rating: 4, comment: 'Great condition, recommended!' },
        { id: '2', user: 'Jane Smith', rating: 5, comment: 'Exactly what I needed for my class.' },
      ],
    },
    {
      id: '2',
      name: 'Tutoring for Linear Algebra',
      location: 'Campus Learning Center',
      description: 'One-on-one tutoring session for linear algebra',
      cost: '$30/hour',
      availability: true,
      reviews: [
        { id: '1', user: 'Alex Johnson', rating: 5, comment: 'The tutor was extremely helpful and patient.' },
      ],
    },
    
  ];
  
  const sampleUsers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active', resources: ['1'] },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'active', resources: ['2'] },

  ];
  
  export const getAllResources = () => {
    return Promise.resolve(sampleResources);
  };
  
  export const getResourceById = (id) => {
    return Promise.resolve(sampleResources.find((resource) => resource.id === id));
  };
  
  export const getResourcesByFilters = (resources, filters) => {
    return resources.filter((resource) => {
      const { location, cost, availability, type } = filters;
      return (
        (location ? resource.location.toLowerCase().includes(location.toLowerCase()) : true) &&
        (cost ? resource.cost.includes(cost) : true) &&
        (availability ? resource.availability === (availability === 'available') : true) &&
        (type ? resource.type === type : true)
      );
    });
  };
  
  export const borrowResource = (resourceId, startDate, endDate) => {
    // Implement logic to borrow a resource
    return Promise.resolve();
  };
  
  export const leaveReview = (resourceId, rating, comment) => {
    // Implement logic to leave a review for a resource
    return Promise.resolve({ id: '3', user: 'New Reviewer', rating, comment });
  };
  
  export const getUserProfile = () => {
    return Promise.resolve(sampleUsers[0]);
  };
  
  export const updateUserProfile = (updatedUser) => {
    // Implement logic to update user profile
    return Promise.resolve(updatedUser);
  };
  
  export const listResource = (newResource) => {
    // Implement logic to list a new resource
    return Promise.resolve({ id: '3', ...newResource });
  };
  
  export const getUsers = () => {
    return Promise.resolve(sampleUsers);
  };
  
  export const suspendUser = (userId) => {
//suspend
    return Promise.resolve();
  };
  
  export const getResources = () => {
    return Promise.resolve([...sampleResources, { id: '3', name: 'Pending Resource', status: 'pending' }]);
  };
  
  export const approveResource = (resourceId) => {
    
    return Promise.resolve();
  };
  
  export const deleteResource = (resourceId) => {
    // Implement logic to delete a resource
    return Promise.resolve();
  };