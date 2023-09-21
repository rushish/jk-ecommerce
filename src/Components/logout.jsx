import { auth } from '../Pages/firebase';

const handleLogout = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

export default handleLogout;