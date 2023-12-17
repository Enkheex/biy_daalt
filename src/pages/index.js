import Login from './login';

  const onSubmit = (event) => {
    event.preventDefault();
    alert('Success!');
  };

export default function Home() {
  return (
    <form onSubmit={onSubmit}>
      <Login/>
    </form>
  );
}
