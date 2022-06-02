import axios from 'axios';

const TestFetchUseCors_xx = async () => {
  const response = await fetch('http://localhost:5000');
  const data1 = await response.json();
  console.log('fetch data1', data1);

  const data2 = await axios.get('http://localhost:5000');
  console.log('axios data2', data2.data);

  const currentUser = {
    name: 'htchung5',
    email: 'htchung5@gms.tku.edu.tw',
    password: 'secret5',
  };

  try {
    const { data } = await axios.post(
      'http://localhost:5000/api/v1/auth_xx/register_xx',
      currentUser
    );
    console.log('register data', data);
  } catch (err) {
    console.log(err);
  }
};

export default TestFetchUseCors_xx;
