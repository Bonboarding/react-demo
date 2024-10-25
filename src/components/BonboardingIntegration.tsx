import Bonboarding from 'bonboarding';
import { useUser } from '../services/UserService';

const BonboardingIntegration = () => {
  const { username } = useUser();
  /*
     * Initialize Bonboarding
     *
     * Make sure to replace the API key with your own.
     * You can find your API key in the Bonboarding dashboard under Integration:
     * https://app.bonboarding.com/integration
     * 
     * Here you would typically real values after authenticating the user
     * and sending the correct data to Bonboarding.
     * 
     * For this example, we'll just use random values, except for the first name.
     * 
     * Learn more about passing user data to Bonboarding:
     * https://docs.bonboarding.com/docs/developers/how-to-pass-user-data/
     */
  Bonboarding.init('el8ffabg86');
  Bonboarding.identify({
    firstName: username,
    uniqueID: Math.round(Math.random() * 100000).toString(),
    // Replace with real values
    lastName: 'Doe',
    email: 'angular@example.com',
    signUpDate: new Date().toISOString(),
  });

  return null;
};

export default BonboardingIntegration;
