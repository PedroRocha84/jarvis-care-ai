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
    assistant: {
        path: '/careassistant',
        controller: 'assistant-controller'
    },
    register: {
        path: '/register',
        controller: 'auth-controller'
    },
    profile: {
        path: '/profile',
        controller: 'profile-controller'
    },
    profileSettings: {
        path: '/profile/settings',
        controller: 'profile-controller'
    },
    logout: {
        path: '/logout',
        controller: 'auth-controller'
    },
    currentPath: {
        path: '',
        controller: ''
    },
    medicineinfo: {
        path: '/medicines',
        controller: 'medicineinfo-controller'
    },
    addMedicine:{
        path:'/medicines/add',
        controller: 'medicineadd-controller'
    },
    health: {
        path: '/health',
        controller: 'health-controller'
    },
    healthMood: {
        path: '/health/mood',
        controller: 'health-controller'
    }
};