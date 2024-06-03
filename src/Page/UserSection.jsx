import { Helmet } from 'react-helmet-async';
import UserPage from '../section/user/view/UserPage';

export default function User() {
  return (
    <>
      <Helmet>
      <title>User Profile</title>\
      </Helmet>
      <UserPage />
    </>
  );
}
