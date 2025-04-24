// client/lib/apiClient.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface FetchOptions extends RequestInit {
  isProtected?: boolean;
}

/**
 * Utility function for making API requests with authentication handling
 */
export async function apiClient(
  endpoint: string,
  options: FetchOptions = {}
) {
  const { isProtected = true, ...fetchOptions } = options;
  
  // Prepare headers
  const headers = new Headers(fetchOptions.headers);
  headers.set('Content-Type', 'application/json');
  
  // Add auth token for protected routes
  if (isProtected && typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }
  
  // Make the request
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });
  
  // Handle unauthorized responses (401)
  if (response.status === 401 && typeof window !== 'undefined') {
    // Clear stored auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to login page
    window.location.href = '/login';
    
    throw new Error('Your session has expired. Please log in again.');
  }
  
  // Parse the JSON response
  const data = await response.json();
  
  // Handle error responses
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  
  return data;
}