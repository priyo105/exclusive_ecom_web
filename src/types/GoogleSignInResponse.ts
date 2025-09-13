// Type definitions
interface User {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photo: string;
}

interface Data {
  idToken: string;
  scopes: string[];
  serverAuthCode: string | null;
  user: User;
}

