/**
 * Represents a user in the system.
 */
interface IUser {
  userName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export default IUser;
