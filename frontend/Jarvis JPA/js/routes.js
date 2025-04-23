export default {
    home: {
        path: '/',
        controller: 'home-controller'
    },
    dashboard: {
        path: '/dashboard',
        controller: 'dashboard-controller'
    },
    signin: {
        path: '/signin',
        controller: 'auth-controller'
    },
    register: {
        path: '/register',
        controller: 'auth-controller'
    },
    profile: {
        path: '/profile',
        controller: 'profile-controller'
    },
    logout: {
        path: '/logout',
        controller: 'auth-controller'
    },
    currentPath: {
        path: '',
        controller: ''
    }
};